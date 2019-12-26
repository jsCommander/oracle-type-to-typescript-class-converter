import { PoolAttributes } from "oracledb";
import { DbManager } from "./src/DbManager";
import { TypeParser, ParserConfig } from "./src/TypeParser";
import { promises as fs } from "fs";
import { OracleTypeInfo, TypeInfoParseFn } from "src/interfaces";

const dbConfig: PoolAttributes = {
  user: "wd4",
  password: "wd4",
  connectString: "192.168.17.171:1521/t4531web",
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

const parserConfig: ParserConfig = {
  baseTemplateFile: "./templates/base.ts",
  interfaceTemplateFile: "./templates/interface.txt",
  emunTemplateFile: "./templates/enum.txt",
  functionTemplateFile: "./templates/function.txt"
};

const owner = "WD4";
const packageName = "WD_CORE";
const outputFile = "./output/oracleProcedures.ts";

const db = new DbManager(dbConfig);
const parser = new TypeParser(parserConfig);

async function main() {
  const base = await fs.readFile("./templates/base.ts", "utf8");

  await fs.writeFile(outputFile, base);

  await parseEnums(outputFile, packageName, owner);
  await parsePackageType(outputFile, packageName);
  await parseOwnerType(outputFile, owner);
  await parseOwnerType(outputFile, "SMASTER");

  await parseProcs(outputFile, packageName);
}

main();

async function parseEnums(
  enumFile: string,
  packageName: string,
  owner: string
) {
  // Package type enums
  const packageTypes = await db.getAllPackageTypes(packageName);
  const packageEnum = parser.makeTypesEnum(
    getTypeName(packageName),
    packageTypes
  );
  await fs.appendFile(enumFile, packageEnum);

  // Owner type enums
  const ownerTypes = await db.getAllOwnerTypes(owner);
  const ownerEnum = parser.makeTypesEnum(getTypeName(owner), ownerTypes);
  await fs.appendFile(enumFile, ownerEnum);

  // smaster type enums
  const smasterTypes = await db.getAllOwnerTypes("SMASTER");
  const smasterEnum = parser.makeTypesEnum(
    getTypeName("SMASTER"),
    smasterTypes
  );
  await fs.appendFile(enumFile, smasterEnum);

  // Package procedures enums
  const packageProcs = await db.getAllPackageProcedures(packageName);
  const typesEnum = parser.makeProcsEnum("PACKAGE_PROCEDURES", packageProcs);
  await fs.appendFile(enumFile, typesEnum);
}

async function parsePackageType(typeFile: string, packageName: string) {
  const types = await db.getAllPackageTypes(packageName);
  for (const type of types) {
    if (type.TYPECODE === "COLLECTION") {
      const collectionType = await db.getPackageCollectionTypeInfo(
        type.TYPE_NAME
      );
      if (collectionType.length > 0) {
        const typeText = parser.makeCollectionType(collectionType[0]);
        await fs.appendFile(typeFile, typeText);
      }
    } else if (type.TYPECODE === "PL/SQL RECORD") {
      const typeInfo = await db.getPackageTypeInfo(type.TYPE_NAME);
      const typeText = parser.makeRecordInterface(typeInfo);
      await fs.appendFile(typeFile, typeText);
    } else {
      console.log("found unknown type: %j", type);
    }
  }
}

async function parseOwnerType(typeFile: string, owner: string) {
  const types = await db.getAllOwnerTypes(owner);
  for (const type of types) {
    if (type.TYPECODE === "COLLECTION") {
      const collectionType = await db.getCollectionTypeInfo(type.TYPE_NAME);
      if (collectionType.length > 0) {
        const typeText = parser.makeCollectionType(collectionType[0]);
        await fs.appendFile(typeFile, typeText);
      }
    } else if (type.TYPECODE === "OBJECT") {
      const typeInfo = await db.getOwnerTypeInfo(type.TYPE_NAME);
      const typeText = parser.makeRecordInterface(typeInfo);
      await fs.appendFile(typeFile, typeText);
    } else {
      console.log("found unknown type: %j", type);
    }
  }
}

async function parseProcs(file: string, packageName: string) {
  const procs = await db.getAllPackageProcedures(packageName);
  for (const proc of procs) {
    if (proc.PROCEDURE_NAME) {
      const procInfo = await db.getProcedureInfo(
        proc.PROCEDURE_NAME,
        packageName
      );
      const func = parser.makeFunction(procInfo);
      await fs.appendFile(file, func);
    }
  }
}

function getTypeName(name: string) {
  return `${name.toUpperCase()}_TYPES`;
}
