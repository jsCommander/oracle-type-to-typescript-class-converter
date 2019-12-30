import {
  PoolAttributes,
  Pool,
  Connection,
  createPool,
  OUT_FORMAT_OBJECT,
  BindParameters
} from "oracledb";
import {
  TypeAttr,
  CollectionType,
  Procedure,
  ProcedureParam,
  PackageType,
  SchemaType
} from "./interfaces";

export class DbManager {
  private pool: Promise<Pool>;
  constructor(config: PoolAttributes) {
    this.pool = createPool(config);
  }

  async execute(
    sql: string,
    binds: BindParameters = {},
    options = { outFormat: OUT_FORMAT_OBJECT }
  ) {
    let con: Connection;
    try {
      const pool = await this.pool;
      con = await pool.getConnection();
      const res = await con.execute(sql, binds, options);
      return res;
    } catch (err) {
      console.error("Database error: %j", err);
    } finally {
      if (con) {
        try {
          await con.close();
        } catch (err) {
          console.error("cant close connection, reason: %j", err);
        }
      }
    }
  }

  // All types

  async getAllPackageObjectTypes(packageName: string) {
    const sql = `select * from all_plsql_types where package_name='${packageName.toUpperCase()}' and typecode='PL/SQL RECORD'`;
    const res = await this.execute(sql);
    return res.rows as PackageType[];
  }

  async getAllPackageCollectionsTypes(packageName: string) {
    const sql = `select * from all_plsql_types where package_name='${packageName.toUpperCase()}' and typecode='COLLECTION'`;
    const res = await this.execute(sql);
    return res.rows as PackageType[];
  }

  async getAllOwnerObjectTypes(owner: string) {
    const sql = `select * from all_types where owner='${owner.toUpperCase()}' and typecode='OBJECT'`;
    const res = await this.execute(sql);
    return res.rows as SchemaType[];
  }

  async getAllOwnerCollectionsTypes(owner: string) {
    const sql = `select * from all_types where owner='${owner.toUpperCase()}' and typecode='COLLECTION'`;
    const res = await this.execute(sql);
    return res.rows as SchemaType[];
  }

  // Type info

  async getPackageTypeInfo(typeName: string) {
    const sql = `select * from all_plsql_type_attrs where type_name='${typeName.toUpperCase()}'`;
    const res = await this.execute(sql);
    return res.rows as TypeAttr[];
  }

  async getOwnerTypeInfo(typeName: string) {
    const sql = `select * from all_type_attrs where type_name='${typeName.toUpperCase()}'`;
    const res = await this.execute(sql);
    return res.rows as TypeAttr[];
  }

  async getCollectionTypeInfo(typeName: string) {
    const sql = `select * from all_coll_types where type_name='${typeName.toUpperCase()}'`;
    const res = await this.execute(sql);
    return res.rows as CollectionType[];
  }

  async getPackageCollectionTypeInfo(typeName: string) {
    const sql = `select * from all_plsql_coll_types where type_name='${typeName.toUpperCase()}'`;
    const res = await this.execute(sql);
    return res.rows as CollectionType[];
  }

  // Procedures

  async getAllPackageProcedures(packageName: string) {
    const sql = `select * from all_procedures where object_type='PACKAGE' and object_name='${packageName.toUpperCase()}'`;
    const res = await this.execute(sql);
    return res.rows as Procedure[];
  }

  async getProcedureInfo(procName: string, packageName: string) {
    const sql = `select * from ALL_ARGUMENTS where package_name='${packageName.toUpperCase()}' and object_name='${procName.toUpperCase()}'`;
    const res = await this.execute(sql);
    return res.rows as ProcedureParam[];
  }
}
