import { DbManager } from "./DbManager";
import { Maker } from "./Maker";
import {
  TypeAttr,
  CollectionType,
  ProcedureParam,
  Procedure,
  PackageType,
  SchemaType,
  ProcedureMetaData,
  SchemaTypesMetaData,
  PackageTypesMetaData,
  Types,
  SchemaTypeInfo,
  PackageTypeInfo,
  SchemaCollectionTypeInfo,
  PackageCollectionTypeInfo
} from "./interfaces";
import { PoolAttributes } from "oracledb";
import { promises as fs } from "fs";
import { join } from "path";

export class TypeParser {
  private db: DbManager;
  private maker: Maker;

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

  async parse(packageName: string, outputFile: string) {
    const fileName = join("./output", outputFile);

    const {
      procedures,
      schemas,
      packages
    } = await this.parsePackageProcedureInfo(packageName);

    await this.parseSchemaTypes(schemas);
    await this.parsePackageTypes(packages);

    await this.parseSchemaTypesInfo(schemas);
    await this.parsePackageTypesInfo(packages);

    try {
      await fs.writeFile(fileName, this.maker.getBase());
      await this.writeSchemaEnums(schemas, fileName);
      await this.writePackageEnums(packages, fileName);
      await this.writeProcedureEnums(procedures, fileName);
      await this.writeTypesClass(schemas, packages, fileName);
    } catch (err) {
      console.log(err);
    }
  }

  async parsePackageProcedureInfo(packageName: string) {
    console.log(
      `parser: start to parse procedure info from package ${packageName}`
    );
    const proceduresInfo = await this.db.getAllPackageProcedures(packageName);
    console.log(
      `parser: found ${proceduresInfo.length} procedures in package ${packageName}`
    );
    const promises = [];
    const procedures: ProcedureMetaData = {};

    const schemas: SchemaTypesMetaData = {};
    const packages: PackageTypesMetaData = {};
    for (const proc of proceduresInfo) {
      if (!proc.PROCEDURE_NAME) {
        continue;
      }
      procedures[proc.PROCEDURE_NAME] = {
        procedureInfo: proc
      };
      const promise = this.db
        .getProcedureInfo(proc.PROCEDURE_NAME, packageName)
        .then(params => {
          console.log(
            `parser: found procedure ${proc.PROCEDURE_NAME} params info`
          );
          procedures[proc.PROCEDURE_NAME].paramsInfo = params;
          this.fillTypesFromParams(params, packages, schemas);
        });
      promises.push(promise);
    }

    await Promise.all(promises);

    return { procedures, schemas, packages };
  }

  fillTypesFromParams(
    params: ProcedureParam[],
    packages: PackageTypesMetaData,
    schemas: SchemaTypesMetaData
  ) {
    for (const param of params) {
      if (param.TYPE_SUBNAME) {
        if (!packages[param.TYPE_NAME]) {
          packages[param.TYPE_NAME] = {
            types: {}
          };
        }

        packages[param.TYPE_NAME].types[param.TYPE_SUBNAME] = {};
      } else if (param.TYPE_OWNER) {
        // TODO пока не ясно как понять, где лежат типы из схемы PUBLIC, так как это по сути алиас.
        const owner =
          param.TYPE_OWNER === "PUBLIC" ? "SMASTER" : param.TYPE_OWNER;
        if (!schemas[owner]) {
          schemas[owner] = {
            types: {}
          };
        }

        schemas[owner].types[param.TYPE_NAME] = {};
      }
    }
  }

  async parseSchemaTypesInfo(schemas: SchemaTypesMetaData) {
    for (const schema of Object.keys(schemas)) {
      const types = Object.keys(schemas[schema].types);
      const promises = [];
      for (const type of types) {
        const currType = schemas[schema].types[type];
        let promise: Promise<void>;
        switch (currType.type) {
          case Types.SCHEMA_COLLECTION_TYPE:
            promise = this.db.getOwnerCollectionTypeInfo(type).then(info => {
              console.log(
                `parser: found collection type ${schema}.${type} details`
              );
              currType.collectionInfo = info[0];
            });
            break;

          case Types.SCHEMA_TYPE:
            promise = this.db.getOwnerTypeInfo(type).then(info => {
              console.log(
                `parser: found object type ${schema}.${type} details`
              );
              currType.attrs = info;
            });
            break;

          default:
            break;
        }

        promises.push(promise);
      }

      await Promise.all(promises);
    }
  }

  async parsePackageTypesInfo(packages: PackageTypesMetaData) {
    for (const pack of Object.keys(packages)) {
      const types = Object.keys(packages[pack].types);
      const promises = [];
      for (const type of types) {
        const currType = packages[pack].types[type];
        let promise: Promise<void>;
        switch (currType.type) {
          case Types.PACKAGE_COLLECTION_TYPE:
            promise = this.db.getPackageCollectionTypeInfo(type).then(info => {
              console.log(
                `parser: found collection type ${pack}.${type} details`
              );
              currType.collectionInfo = info[0];
            });
            break;

          case Types.PACKAGE_TYPE:
            promise = this.db.getPackageTypeInfo(type).then(info => {
              console.log(`parser: found object type ${pack}.${type} details`);
              currType.attrs = info;
            });
            break;

          default:
            break;
        }

        promises.push(promise);
      }

      await Promise.all(promises);
    }
  }

  async parseSchemaTypes(schemas: SchemaTypesMetaData) {
    for (const schema of Object.keys(schemas)) {
      console.log(`parser: start to parse schema ${schema} types`);
      const records = await this.db.getAllOwnerObjectTypes(
        schema.toUpperCase()
      );
      for (const rec of records) {
        const currSchema = schemas[schema].types[rec.TYPE_NAME];
        if (!currSchema) {
          continue;
        }
        currSchema.type = Types.SCHEMA_TYPE;
        currSchema.typeInfo = rec;
        console.log(`parser: found ${rec.TYPE_NAME} object type info`);
      }

      const colls = await this.db.getAllOwnerCollectionsTypes(
        schema.toUpperCase()
      );
      for (const coll of colls) {
        const currSchema = schemas[schema].types[coll.TYPE_NAME];
        if (!currSchema) {
          continue;
        }
        currSchema.type = Types.SCHEMA_COLLECTION_TYPE;
        currSchema.typeInfo = coll;
        console.log(`parser: found ${coll.TYPE_NAME} collection type info`);
      }
    }
  }

  async parsePackageTypes(packages: PackageTypesMetaData) {
    for (const pack of Object.keys(packages)) {
      console.log(`parser: start to parse schema ${pack} types`);
      const records = await this.db.getAllPackageObjectTypes(
        pack.toUpperCase()
      );
      for (const rec of records) {
        const currSchema = packages[pack].types[rec.TYPE_NAME];
        if (!currSchema) {
          continue;
        }
        currSchema.type = Types.PACKAGE_TYPE;
        currSchema.typeInfo = rec;
        console.log(`parser: found ${rec.TYPE_NAME} object type info`);
      }

      const colls = await this.db.getAllPackageCollectionsTypes(
        pack.toUpperCase()
      );
      for (const coll of colls) {
        const currSchema = packages[pack].types[coll.TYPE_NAME];
        if (!currSchema) {
          continue;
        }
        currSchema.type = Types.PACKAGE_COLLECTION_TYPE;
        currSchema.typeInfo = coll;
        console.log(`parser: found ${coll.TYPE_NAME} collection type info`);
      }
    }
  }

  async writePackageEnums(packages: PackageTypesMetaData, outputFile: string) {
    for (const pack of Object.keys(packages)) {
      const types = Object.keys(packages[pack].types);

      const typeInfo: PackageType[] = [];

      types.forEach(x => {
        const currType = packages[pack].types[x];
        if (currType.typeInfo) {
          typeInfo.push(currType.typeInfo);
        }
      });

      const enumStr = this.maker.makePackageTypesEnum(pack, typeInfo);
      await fs.appendFile(outputFile, enumStr);
    }
  }

  async writeProcedureEnums(procedures: ProcedureMetaData, outputFile: string) {
    const procs = Object.keys(procedures);

    const procsInfo: Procedure[] = [];

    procs.forEach(x => {
      procsInfo.push(procedures[x].procedureInfo);
    });

    const enumStr = this.maker.makeProcsEnum("PROCEDURES", procsInfo);
    await fs.appendFile(outputFile, enumStr);
  }

  async writeSchemaEnums(schemas: SchemaTypesMetaData, outputFile: string) {
    for (const schema of Object.keys(schemas)) {
      const types = Object.keys(schemas[schema].types);

      const typeInfo: SchemaType[] = [];

      types.forEach(x => {
        const currType = schemas[schema].types[x];
        if (currType.typeInfo) {
          typeInfo.push(currType.typeInfo);
        }
      });

      const enumStr = this.maker.makeSchemaTypesEnum(schema, typeInfo);
      await fs.appendFile(outputFile, enumStr);
    }
  }

  async writeTypesClass(
    schemas: SchemaTypesMetaData,
    packages: PackageTypesMetaData,
    outputFile: string
  ) {
    // Чтобы избежать ошибок "Class 'x' used before its declaration"
    // нужно сначала записать все объектные типы, а только потом коллекционные
    const objectTypes: (SchemaTypeInfo | PackageTypeInfo)[] = [];
    const collectionTypes: (
      | SchemaCollectionTypeInfo
      | PackageCollectionTypeInfo
    )[] = [];

    for (const name of Object.keys(schemas)) {
      const types = Object.keys(schemas[name].types);

      for (const type of types) {
        const currType = schemas[name].types[type];
        if (currType.type === Types.SCHEMA_TYPE) {
          objectTypes.push(currType);
        } else if (currType.type === Types.SCHEMA_COLLECTION_TYPE) {
          collectionTypes.push(currType);
        }
      }
    }

    for (const name of Object.keys(packages)) {
      const types = Object.keys(packages[name].types);

      for (const type of types) {
        const currType = packages[name].types[type];
        if (currType.type === Types.PACKAGE_TYPE) {
          objectTypes.push(currType);
        } else if (currType.type === Types.PACKAGE_COLLECTION_TYPE) {
          collectionTypes.push(currType);
        }
      }
    }

    for (const type of objectTypes) {
      const typeClassStr = this.maker.makeTypeClass(type);

      await fs.appendFile(outputFile, typeClassStr);
    }

    for (const type of collectionTypes) {
      const typeClassStr = this.maker.makeCollectionType(type);

      await fs.appendFile(outputFile, typeClassStr);
    }
  }
}
