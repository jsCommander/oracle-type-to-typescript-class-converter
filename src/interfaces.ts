export interface ProcedureParam {
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
  ProcedureParam;
  SEQUENCE: string;
  SUBPROGRAM_ID: string;
  TYPE_LINK: string;
  TYPE_NAME: string;
  TYPE_OWNER: string;
  TYPE_SUBNAME: string;
}

export interface PackageType {
  ATTRIBUTES: string;
  CONTAINS_PLSQL: string;
  OWNER: string;
  PACKAGE_NAME: string;
  TYPE_NAME: string;
  TYPE_OID: Buffer;
  TYPECODE: string;
}

export interface SchemaType {
  TYPE_NAME: string;
  TYPE_OID: Buffer;
  TYPECODE: string;
  FINAL: string;
  INCOMPLETE: string;
  INSTANTIABLE: string;
  LOCAL_ATTRIBUTES: null;
  LOCAL_METHODS: null;
  METHODS: number;
  OWNER: string;
  PREDEFINED: string;
  SUPERTYPE_NAME: null;
  SUPERTYPE_OWNER: null;
}

export interface Procedure {
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

export interface TypeAttr {
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
export interface CollectionType {
  CHAR_USED: string;
  CHARACTER_SET_NAME: null;
  COLL_TYPE: string;
  ELEM_STORAGE: null;
  ELEM_TYPE_MOD: null;
  ELEM_TYPE_NAME: string;
  ELEM_TYPE_OWNER: string;
  ELEM_TYPE_PACKAGE: string;
  INDEX_BY: null;
  LENGTH: null;
  NULLS_STORED: string;
  OWNER: string;
  PACKAGE_NAME: string;
  PRECISION: null;
  SCALE: null;
  TYPE_NAME: string;
  UPPER_BOUND: null;
}

export enum Types {
  SCHEMA_COLLECTION_TYPE,
  PACKAGE_COLLECTION_TYPE,
  PACKAGE_TYPE,
  SCHEMA_TYPE
}

export interface PackageCollectionTypeInfo {
  type?: Types.PACKAGE_COLLECTION_TYPE;
  typeInfo?: PackageType;
  collectionInfo?: CollectionType;
}

export interface SchemaCollectionTypeInfo {
  type?: Types.SCHEMA_COLLECTION_TYPE;
  typeInfo?: SchemaType;
  collectionInfo?: CollectionType;
}

export interface PackageTypeInfo {
  type?: Types.PACKAGE_TYPE;
  typeInfo?: PackageType;
  attrs?: TypeAttr[];
}

export interface SchemaTypeInfo {
  type?: Types.SCHEMA_TYPE;
  typeInfo?: SchemaType;
  attrs?: TypeAttr[];
}

export type TypeInfo =
  | SchemaCollectionTypeInfo
  | SchemaTypeInfo
  | PackageCollectionTypeInfo
  | PackageTypeInfo;

export interface ProcedureInfo {
  procedureInfo?: Procedure;
  paramsInfo?: ProcedureParam[];
}

export interface PackageTypesMetaData {
  [pack: string]: {
    types: { [type: string]: PackageTypeInfo | PackageCollectionTypeInfo };
  };
}

export interface SchemaTypesMetaData {
  [schema: string]: {
    types: { [type: string]: SchemaTypeInfo | SchemaCollectionTypeInfo };
    packages: PackageTypesMetaData;
  };
}

export interface ProcedureMetaData {
  [procedure: string]: ProcedureInfo;
}
