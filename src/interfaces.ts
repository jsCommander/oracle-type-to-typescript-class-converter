export interface OracleProcParams {
  ARGUMENT_NAME: string;
  CHAR_LENGTH: number;
  CHAR_USED: string;
  CHARACTER_SET_NAME: string;
  DATA_LENGTH: string;
  DATA_LEVEL: number;
  DATA_PRECISION: string;
  DATA_SCALE: string;
  DATA_TYPE: string;
  DEFAULT_LENGTH: number;
  DEFAULT_VALUE: string;
  DEFAULTED: "Y" | "N";
  IN_OUT: "IN" | "OUT" | "IN_OUT";
  OBJECT_ID: string;
  OBJECT_NAME: string;
  ORIGIN_CON_ID: string;
  OVERLOAD: string;
  PACKAGE_NAME: string;
  PLS_TYPE: string;
  POSITION: number;
  RADIX: string;
  SEQUENCE: string;
  SUBPROGRAM_ID: string;
  TYPE_LINK: string;
  TYPE_NAME: string;
  TYPE_OWNER: string;
  TYPE_SUBNAME: string;
}

export interface OracleTypeInfo {
  ATTRIBUTES: string;
  CONTAINS_PLSQL: string;
  OWNER: string;
  PACKAGE_NAME: string;
  TYPE_NAME: string;
  TYPE_OID: Buffer;
  TYPECODE: string;
}

export interface OracleProcInfo {
  INTERFACE: string;
  OBJECT_ID: number;
  OBJECT_NAME: string;
  OBJECT_TYPE: string;
  ORIGIN_CON_ID: number;
  OVERLOAD: string;
  OWNER: string;
  PARALLEL: string;
  PIPELINED: string;
  PROCEDURE_NAME: string;
  SUBPROGRAM_ID: number;
}

export interface TypeAttrInfo {
  ATTR_NAME: string;
  ATTR_NO: number;
  ATTR_TYPE_MOD: string;
  ATTR_TYPE_NAME: string;
  ATTR_TYPE_OWNER: string;
  ATTR_TYPE_PACKAGE: string;
  CHAR_USED: string;
  CHARACTER_SET_NAME: string;
  LENGTH: number;
  OWNER: string;
  PACKAGE_NAME: string;
  PRECISION: string;
  SCALE: string;
  TYPE_NAME: string;
}

export type TypeInfoParseFn = (typeName: string) => TypeAttrInfo[];
