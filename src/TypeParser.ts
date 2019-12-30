import { DbManager } from "./DbManager";
import { Maker } from "./Maker";
import {
  TypeAttr,
  CollectionType,
  ProcedureParam,
  Procedure,
  PackageType,
  SchemaType
} from "./interfaces";
import { PoolAttributes } from "oracledb";
import { promises as fs } from "fs";
import { join } from "path";

export interface ParseOptions {
  packageTypes: string[];
  schemaTypes: string[];
  packageProcedures: string[];
}

export interface PackageTypesMetaData {
  [pack: string]: {
    records: {
      [record: string]: {
        typeInfo?: PackageType;
        attrs?: TypeAttr[];
      };
    };
    collections: {
      [collection: string]: {
        typeInfo?: PackageType;
        collectionInfo?: CollectionType;
      };
    };
  };
}

export interface SchemaTypesMetaData {
  [schema: string]: {
    records: {
      [record: string]: {
        typeInfo?: SchemaType;
        attrs?: TypeAttr[];
      };
    };
    collections: {
      [collection: string]: {
        typeInfo?: SchemaType;
        collectionInfo?: CollectionType;
      };
    };
  };
}

export class TypeParser {
  private db: DbManager;
  private maker: Maker;

  private packages: PackageTypesMetaData;
  private schemas: SchemaTypesMetaData;

  constructor(connectString: string, user: string, password: string) {
    const dbConfig: PoolAttributes = {
      user,
      password,
      connectString,
      // edition: 'ORA$BASE', // used for Edition Based Redefintion
      // events: true, // whether to handle Oracle Database FAN and RLB events or support CQN
      // externalAuth: false, // whether connections should be established using External Authentication
      // homogeneous: true, // all connections in the pool have the same credentials
      // poolAlias: 'default', // set an alias to allow access to the pool via a name.
      // poolIncrement: 1, // only grow the pool by one connection at a time
      // poolMax: 4, // maximum size of the pool. Increase UV_THREADPOOL_SIZE if you increase poolMax
      // poolMin: 0, // start with no connections; let the pool shrink completely
      // poolPingInterval: 60, // check aliveness of connection if idle in the pool for 60 seconds
      poolTimeout: 60, // terminate connections that are idle in the pool for 60 seconds
      queueTimeout: 60000 // terminate getConnection() calls in the queue longer than 60000 milliseconds
      // sessionCallback: myFunction, // function invoked for brand new connections or by a connection tag mismatch
      // stmtCacheSize: 30 // number of statements that are cached in the statement cache of each connection
    };

    this.db = new DbManager(dbConfig);
    this.maker = new Maker();
  }

  async parse(options: ParseOptions, outputFile: string) {
    const fileName = join("./output", outputFile);
    console.log("parsing: start parsing types");
    const { packageTypes, packageProcedures, schemaTypes } = options;

    this.resetMetaData();

    this.schemas = await this.parseSchemaTypes(schemaTypes);
    this.packages = await this.parsePackageTypes(packageTypes);

    await this.parseSchemaTypesInfo(this.schemas);
    await this.parsePackageTypesInfo(this.packages);

    try {
      await fs.writeFile(fileName, this.maker.getBase());
      await this.writeSchemaEnums(this.schemas, fileName);
      await this.writePackageEnums(this.packages, fileName);
    } catch (err) {
      console.log(err);
    }
  }

  async writePackageEnums(packages: PackageTypesMetaData, outputFile: string) {
    for (const pack of Object.keys(packages)) {
      const collections = Object.keys(packages[pack].collections);
      const records = Object.keys(packages[pack].records);

      const typeInfo: PackageType[] = [];

      collections.forEach(x => {
        typeInfo.push(packages[pack].collections[x].typeInfo);
      });
      records.forEach(x => {
        typeInfo.push(packages[pack].records[x].typeInfo);
      });

      const enumStr = this.maker.makePackageTypesEnum(pack, typeInfo);
      await fs.appendFile(outputFile, enumStr);
    }
  }

  async writeSchemaEnums(schemas: SchemaTypesMetaData, outputFile: string) {
    for (const schema of Object.keys(schemas)) {
      const collections = Object.keys(schemas[schema].collections);
      const records = Object.keys(schemas[schema].records);

      const typeInfo: SchemaType[] = [];

      collections.forEach(x => {
        typeInfo.push(schemas[schema].collections[x].typeInfo);
      });
      records.forEach(x => {
        typeInfo.push(schemas[schema].records[x].typeInfo);
      });

      const enumStr = this.maker.makeSchemaTypesEnum(schema, typeInfo);
      await fs.appendFile(outputFile, enumStr);
    }
  }

  async parseSchemaTypesInfo(schemas: SchemaTypesMetaData) {
    for (const schema of Object.keys(schemas)) {
      const promises = [];
      const collections = Object.keys(schemas[schema].collections);
      const records = Object.keys(schemas[schema].records);
      for (const coll of collections) {
        const promise = this.db.getCollectionTypeInfo(coll).then(info => {
          console.log(`found: collection type ${schema}.${coll} details`);
          schemas[schema].collections[coll].collectionInfo = info[0];
        });
        promises.push(promise);
      }

      for (const record of records) {
        const promise = this.db.getOwnerTypeInfo(record).then(info => {
          console.log(`found: record type ${schema}.${record} details`);
          schemas[schema].records[record].attrs = info;
        });
        promises.push(promise);
      }

      await Promise.all(promises);
    }
  }

  async parsePackageTypesInfo(packages: PackageTypesMetaData) {
    for (const pack of Object.keys(packages)) {
      const promises = [];
      const collections = Object.keys(packages[pack].collections);
      const records = Object.keys(packages[pack].records);
      for (const coll of collections) {
        const promise = this.db.getCollectionTypeInfo(coll).then(info => {
          console.log(`found: collection type ${pack}.${coll} details`);
          packages[pack].collections[coll].collectionInfo = info[0];
        });
        promises.push(promise);
      }

      for (const record of records) {
        const promise = this.db.getOwnerTypeInfo(record).then(info => {
          console.log(`found: record type ${pack}.${record} details`);
          packages[pack].records[record].attrs = info;
        });
        promises.push(promise);
      }

      await Promise.all(promises);
    }
  }

  async parseSchemaTypes(schemas: string[]) {
    const output: SchemaTypesMetaData = {};
    for (const schema of schemas) {
      output[schema] = {
        records: {},
        collections: {}
      };
      console.log(`parsing: schema ${schema} types`);
      const records = await this.db.getAllOwnerObjectTypes(
        schema.toUpperCase()
      );
      for (const rec of records) {
        output[schema].records[rec.TYPE_NAME] = {};
        output[schema].records[rec.TYPE_NAME].typeInfo = rec;
      }
      console.log(`found: ${records.length} record types in schema ${schema} `);

      const colls = await this.db.getAllOwnerCollectionsTypes(
        schema.toUpperCase()
      );
      for (const coll of colls) {
        output[schema].collections[coll.TYPE_NAME] = {};
        output[schema].collections[coll.TYPE_NAME].typeInfo = coll;
      }
      console.log(
        `found: ${colls.length} collection types in schema ${schema} `
      );
    }
    return output;
  }

  async parsePackageTypes(packages: string[]) {
    const output: PackageTypesMetaData = {};
    for (const pack of packages) {
      output[pack] = {
        records: {},
        collections: {}
      };
      console.log(`parsing: package ${pack} types`);
      const records = await this.db.getAllPackageObjectTypes(
        pack.toUpperCase()
      );
      for (const rec of records) {
        output[pack].records[rec.TYPE_NAME] = {};
        output[pack].records[rec.TYPE_NAME].typeInfo = rec;
      }
      console.log(`found: ${records.length} record types in package ${pack} `);

      const colls = await this.db.getAllPackageCollectionsTypes(
        pack.toUpperCase()
      );
      for (const coll of colls) {
        output[pack].collections[coll.TYPE_NAME] = {};
        output[pack].collections[coll.TYPE_NAME].typeInfo = coll;
      }
      console.log(`found: ${colls.length} collection types in package ${pack}`);
    }
    return output;
  }

  resetMetaData() {
    this.packages = {};
    this.schemas = {};
  }

  // async parseOwnerType(owner: string) {
  //   const types = await this.db.getAllOwnerTypes(owner);

  //   const collectionsPromise = types
  //     .filter(type => type.TYPECODE === "COLLECTION")
  //     .map(async type => {
  //       const collectionType = await this.db.getCollectionTypeInfo(
  //         type.TYPE_NAME
  //       );
  //       if (collectionType.length > 0) {
  //         this.collectionsAttrs[type.TYPE_NAME] = collectionType[0];
  //       }
  //     });
  //   const objectsPromise = types
  //     .filter(type => type.TYPECODE === "OBJECT")
  //     .map(async type => {
  //       const typeInfo = await this.db.getOwnerTypeInfo(type.TYPE_NAME);
  //       this.typesAttrs[type.TYPE_NAME] = typeInfo;
  //     });

  //   await Promise.all(objectsPromise);
  //   await Promise.all(collectionsPromise);
  // }

  //   async function main() {
  //     const base = await fs.readFile("./templates/base.ts", "utf8");

  //     await fs.writeFile(outputFile, base);

  //     await parseEnums(outputFile, packageName, owner);
  //     await parsePackageType(outputFile, packageName);
  //     await parseOwnerType(outputFile, owner);
  //     await parseOwnerType(outputFile, "SMASTER");

  //     await parseProcs(outputFile, packageName);
  //   }

  //   main();

  //   async function parseEnums(
  //     enumFile: string,
  //     packageName: string,
  //     owner: string
  //   ) {
  //     // Package type enums
  //     const packageTypes = await db.getAllPackageTypes(packageName);
  //     const packageEnum = parser.makeTypesEnum(
  //       getTypeName(packageName),
  //       packageTypes
  //     );
  //     await fs.appendFile(enumFile, packageEnum);

  //     // Owner type enums
  //     const ownerTypes = await db.getAllOwnerTypes(owner);
  //     const ownerEnum = parser.makeTypesEnum(getTypeName(owner), ownerTypes);
  //     await fs.appendFile(enumFile, ownerEnum);

  //     // smaster type enums
  //     const smasterTypes = await db.getAllOwnerTypes("SMASTER");
  //     const smasterEnum = parser.makeTypesEnum(
  //       getTypeName("SMASTER"),
  //       smasterTypes
  //     );
  //     await fs.appendFile(enumFile, smasterEnum);

  //     // Package procedures enums
  //     const packageProcs = await db.getAllPackageProcedures(packageName);
  //     const typesEnum = parser.makeProcsEnum("PACKAGE_PROCEDURES", packageProcs);
  //     await fs.appendFile(enumFile, typesEnum);
  //   }

  //   async function parsePackageType(typeFile: string, packageName: string) {
  //     const types = await db.getAllPackageTypes(packageName);
  //     for (const type of types) {
  //       if (type.TYPECODE === "COLLECTION") {
  //         const collectionType = await db.getPackageCollectionTypeInfo(
  //           type.TYPE_NAME
  //         );
  //         if (collectionType.length > 0) {
  //           const typeText = parser.makeCollectionType(collectionType[0]);
  //           await fs.appendFile(typeFile, typeText);
  //         }
  //       } else if (type.TYPECODE === "PL/SQL RECORD") {
  //         const typeInfo = await db.getPackageTypeInfo(type.TYPE_NAME);
  //         const typeText = parser.makeRecordInterface(typeInfo);
  //         await fs.appendFile(typeFile, typeText);
  //       } else {
  //         console.log("found unknown type: %j", type);
  //       }
  //     }
  //   }

  //   async function parseOwnerType(typeFile: string, owner: string) {
  //     const types = await db.getAllOwnerTypes(owner);
  //     for (const type of types) {
  //       if (type.TYPECODE === "COLLECTION") {
  //         const collectionType = await db.getCollectionTypeInfo(type.TYPE_NAME);
  //         if (collectionType.length > 0) {
  //           const typeText = parser.makeCollectionType(collectionType[0]);
  //           await fs.appendFile(typeFile, typeText);
  //         }
  //       } else if (type.TYPECODE === "OBJECT") {
  //         const typeInfo = await db.getOwnerTypeInfo(type.TYPE_NAME);
  //         const typeText = parser.makeRecordInterface(typeInfo);
  //         await fs.appendFile(typeFile, typeText);
  //       } else {
  //         console.log("found unknown type: %j", type);
  //       }
  //     }
  //   }

  //   async function parseProcs(file: string, packageName: string) {
  //     const procs = await db.getAllPackageProcedures(packageName);
  //     for (const proc of procs) {
  //       if (proc.PROCEDURE_NAME) {
  //         const procInfo = await db.getProcedureInfo(
  //           proc.PROCEDURE_NAME,
  //           packageName
  //         );
  //         const func = parser.makeFunction(procInfo);
  //         await fs.appendFile(file, func);
  //       }
  //     }
  //   }

  private getTypeName(name: string) {
    return `${name.toUpperCase()}_TYPES`;
  }
}
