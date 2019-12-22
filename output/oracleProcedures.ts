/*
 * !!!Этот файл сгенерирован автоматически по мета-данным оракла!!!
 * Мне надоело писать бинды вручную и потом отлавливать кучу ошибок
 * и я решил автоматизировать процесс. По метаданным генерятся функции
 * которые принимают типизированные параметры, а возвращают sql запрос
 * и бинды к нему
 *
 */

import {
  NUMBER,
  STRING,
  BIND_IN,
  BIND_OUT,
  BIND_IN_OUT,
  DATE,
  BindParameters
} from "oracledb";

export interface OracleProcedureData {
  sql: string;
  binds: BindParameters;
}

export class OracleDate {
  readonly regex = /^\d{2}-\w{3}-\d{4}$/;
  constructor(public date: string) {
    if (!this.regex.test(date)) {
      throw new Error(`wrong date format, expected dd-mmm-yyyy`);
    }
  }
}

export enum PACKAGE_TYPES {
  T_BRANCH_REC="T_BRANCH_REC",T_BRANCH_TAB="T_BRANCH_TAB",T_DLR_REC="T_DLR_REC",T_DLR_TAB="T_DLR_TAB",T_USER_REC="T_USER_REC",T_USER_TAB="T_USER_TAB",T_DLR_POS_REC="T_DLR_POS_REC",T_DLR_POS_TAB="T_DLR_POS_TAB",T_CID_TYPES_REC="T_CID_TYPES_REC",T_CID_TYPES_TAB="T_CID_TYPES_TAB",T_FIELD_TYPES_REC="T_FIELD_TYPES_REC",T_FIELD_TYPES_TAB="T_FIELD_TYPES_TAB",T_DOCUMENT_FIELD_REC="T_DOCUMENT_FIELD_REC",T_DOCUMENT_FIELD_TAB="T_DOCUMENT_FIELD_TAB",T_DOCUMENT_FIELD_EXT_REC="T_DOCUMENT_FIELD_EXT_REC",T_DOCUMENT_FIELD_EXT_TAB="T_DOCUMENT_FIELD_EXT_TAB",T_DOCUMENT_DICT_REC="T_DOCUMENT_DICT_REC",T_DOCUMENT_DICT_TAB="T_DOCUMENT_DICT_TAB",T_CONTRACT_FIELD_REC="T_CONTRACT_FIELD_REC",T_CONTRACT_FIELD_TAB="T_CONTRACT_FIELD_TAB",T_CONTRACT_FIELD_EXT_REC="T_CONTRACT_FIELD_EXT_REC",T_CONTRACT_FIELD_EXT_TAB="T_CONTRACT_FIELD_EXT_TAB"
}

export enum OWNER_TYPES {
  T_WD_CID_REC="T_WD_CID_REC",T_WD_CID_TAB="T_WD_CID_TAB",T_WD_CUST_ADDR_DET_REC="T_WD_CUST_ADDR_DET_REC",T_WD_CUST_ADDR_DET_TAB="T_WD_CUST_ADDR_DET_TAB",T_WD_CUST_ADDR_REC="T_WD_CUST_ADDR_REC",T_WD_CUST_ADDR_TAB="T_WD_CUST_ADDR_TAB",T_WD_CUST_NAME_REC="T_WD_CUST_NAME_REC",T_WD_CUST_NAME_TAB="T_WD_CUST_NAME_TAB",T_WD_DICT_REC="T_WD_DICT_REC",T_WD_DICT_TAB="T_WD_DICT_TAB",T_WD_DOC_HIERARCHY_REC="T_WD_DOC_HIERARCHY_REC",T_WD_DOC_HIERARCHY_TAB="T_WD_DOC_HIERARCHY_TAB",T_WD_FUNC_ACCESS_REC="T_WD_FUNC_ACCESS_REC",T_WD_FUNC_ACCESS_TAB="T_WD_FUNC_ACCESS_TAB",T_WD_NUMBER_TAB="T_WD_NUMBER_TAB",T_WD_OPT_DATA_REC="T_WD_OPT_DATA_REC",T_WD_OPT_DATA_TAB="T_WD_OPT_DATA_TAB",T_WD_REPORT_REC="T_WD_REPORT_REC",T_WD_REPORT_TAB="T_WD_REPORT_TAB",T_WD_VARCHAR2_2000_TAB="T_WD_VARCHAR2_2000_TAB"
}

export enum PACKAGE_PROCEDURES {
  ADD_CONTRACT_FIELD="ADD_CONTRACT_FIELD",ADD_DOCUMENT_FIELD="ADD_DOCUMENT_FIELD",ADD_IDENTIFY_DOCUMENT="ADD_IDENTIFY_DOCUMENT",ADD_LOG="ADD_LOG",ADD_POS="ADD_POS",ADD_USER="ADD_USER",CHANGE_ICC="CHANGE_ICC",CHANGE_ICC_BY_SUBS="CHANGE_ICC_BY_SUBS",CHANGE_POS_CODE="CHANGE_POS_CODE",CHANGE_USER_PASSWORD="CHANGE_USER_PASSWORD",DEL_CUST_IDDOC="DEL_CUST_IDDOC",DEL_DOCUMENT_HIERARCHY="DEL_DOCUMENT_HIERARCHY",DEL_POS="DEL_POS",DEL_USER="DEL_USER",GET_BLOCKED_USER_LIST="GET_BLOCKED_USER_LIST",GET_BRANCH_LIST="GET_BRANCH_LIST",GET_CONTRACT="GET_CONTRACT",GET_CONTRACT_FIELDS="GET_CONTRACT_FIELDS",GET_CONTRACT_FIELDS_SETTING="GET_CONTRACT_FIELDS_SETTING",GET_CUSTOMER_VALIDATION="GET_CUSTOMER_VALIDATION",GET_CUST_ADDR="GET_CUST_ADDR",GET_CUST_IDDOC="GET_CUST_IDDOC",GET_DEALER_LIST="GET_DEALER_LIST",GET_DICT="GET_DICT",GET_DIC_FIELD="GET_DIC_FIELD",GET_DOCUMENT_FIELDS="GET_DOCUMENT_FIELDS",GET_DOCUMENT_FIELDS_SETTING="GET_DOCUMENT_FIELDS_SETTING",GET_DOCUMENT_FIELD_DICT="GET_DOCUMENT_FIELD_DICT",GET_DOCUMENT_HIERARCHY="GET_DOCUMENT_HIERARCHY",GET_FIELD_TYPES="GET_FIELD_TYPES",GET_IDENTIFY_DOCUMENT="GET_IDENTIFY_DOCUMENT",GET_PARAMETER="GET_PARAMETER",GET_POS_LIST="GET_POS_LIST",GET_REPORT="GET_REPORT",GET_USER_ACCESS="GET_USER_ACCESS",GET_USER_LIST="GET_USER_LIST",GET_USER_SETTINGS="GET_USER_SETTINGS",GET_WD_CUST_NAME="GET_WD_CUST_NAME",SET_CONTRACT_FIELD_SETTING="SET_CONTRACT_FIELD_SETTING",SET_CUSTOMER_VALIDATION="SET_CUSTOMER_VALIDATION",SET_DOCUMENT_FIELD_SETTING="SET_DOCUMENT_FIELD_SETTING",SET_DOCUMENT_HIERARCHY="SET_DOCUMENT_HIERARCHY",SET_PARAMETER="SET_PARAMETER",SET_USER_SETTINGS="SET_USER_SETTINGS",UNBLOCK_USER="UNBLOCK_USER",UPDATE_CONTRACT="UPDATE_CONTRACT",UPDATE_CUST_ADDR="UPDATE_CUST_ADDR",UPDATE_CUST_IDDOC="UPDATE_CUST_IDDOC",UPDATE_CUST_NAME="UPDATE_CUST_NAME",USER_AUTHENTICATION="USER_AUTHENTICATION"
}

export interface T_BRANCH_REC {
  BRANCH_ID:number;BRANCH_NAME:string;
}

export type T_BRANCH_TAB = T_BRANCH_REC[]; 
export interface T_DLR_REC {
  BRANCH_ID:number;DLR_ID:number;DLR_NAME:string;
}

export type T_DLR_TAB = T_DLR_REC[]; 
export interface T_USER_REC {
  LOGIN:string;STIME:OracleDate;USER_ID:number;
}

export type T_USER_TAB = T_USER_REC[]; 
export interface T_DLR_POS_REC {
  DLR_ID:number;POS_CODE:string;POS_ID:number;
}

export type T_DLR_POS_TAB = T_DLR_POS_REC[]; 
export interface T_CID_TYPES_REC {
  IDDOC_FULL_NAME:string;IDDOC_ID:number;IDDOC_NAME:string;
}

export type T_CID_TYPES_TAB = T_CID_TYPES_REC[]; 
export interface T_FIELD_TYPES_REC {
  UFT_DESC:string;UFT_ID:number;
}

export type T_FIELD_TYPES_TAB = T_FIELD_TYPES_REC[]; 
export interface T_DOCUMENT_FIELD_REC {
  CID_FLD_ID:string;FIELD_NAME:string;FIELD_SIZE:number;IDDOC_ID:number;MAND:number;ORD_UI:number;TEMPLATE:string;UFT_ID:number;
}

export type T_DOCUMENT_FIELD_TAB = T_DOCUMENT_FIELD_REC[]; 
export interface T_DOCUMENT_FIELD_EXT_REC {
  CID_FLD_ID:string;FIELD_NAME:string;FIELD_NAME_WD:string;FIELD_SIZE:number;IDDOC_ID:number;MAND:number;MAND_WD:number;ORD_UI:number;TEMPLATE:string;UFT_ID:number;USE:number;
}

export type T_DOCUMENT_FIELD_EXT_TAB = T_DOCUMENT_FIELD_EXT_REC[]; 
export interface T_DOCUMENT_DICT_REC {
  CID_FLD_ID:string;VALUE:string;VALUE_ID:number;
}

export type T_DOCUMENT_DICT_TAB = T_DOCUMENT_DICT_REC[]; 
export interface T_CONTRACT_FIELD_REC {
  FIELD_ID:number;FIELD_NAME:string;FIELD_SIZE:number;MAND:number;OBJECT_TYPE:number;UFT_ID:number;
}

export type T_CONTRACT_FIELD_TAB = T_CONTRACT_FIELD_REC[]; 
export interface T_CONTRACT_FIELD_EXT_REC {
  FIELD_ID:number;FIELD_NAME:string;FIELD_NAME_WD:string;FIELD_SIZE:number;MAND:number;MAND_WD:number;OBJECT_TYPE:number;UFT_ID:number;USE:number;VALIDATION_ID:number;
}

export type T_CONTRACT_FIELD_EXT_TAB = T_CONTRACT_FIELD_EXT_REC[]; 
export interface T_WD_CID_REC {
  IDDOC_ID:number;ID_MAIN:number;CID_ID:number;OWNER_CID_ID:number;ID_COUNTRY:number;ID_HOLDER_NAME:string;CID_OPT_DATA_TAB:T_WD_OPT_DATA_TAB;
}

export type T_WD_CID_TAB = T_WD_CID_REC[]; 
export interface T_WD_CUST_ADDR_DET_REC {
  ADDR_DICT_CODE:string;ADDR_DICT_ID:number;ADDR_DICT_VALUE:string;
}

export type T_WD_CUST_ADDR_DET_TAB = T_WD_CUST_ADDR_DET_REC[]; 
export interface T_WD_CUST_ADDR_REC {
  ADDR_TYPE_ID:number;CUST_ADDR_ID:number;ALT_ADDRESS:string;ADDR_DET_TAB:T_WD_CUST_ADDR_DET_TAB;
}

export type T_WD_CUST_ADDR_TAB = T_WD_CUST_ADDR_REC[]; 
export interface T_WD_CUST_NAME_REC {
  CNT_ID:number;CN_DICT_CODE:string;CN_VALUE:string;
}

export type T_WD_CUST_NAME_TAB = T_WD_CUST_NAME_REC[]; 
export interface T_WD_DICT_REC {
  ID:number;NAME:string;DESCRIPTION:string;ENTITY_TYPE_ID:number;
}

export type T_WD_DICT_TAB = T_WD_DICT_REC[]; 
export interface T_WD_DOC_HIERARCHY_REC {
  IDDOC_ID:number;PARENT_IDDOC_ID:number;
}

export type T_WD_DOC_HIERARCHY_TAB = T_WD_DOC_HIERARCHY_REC[]; 
export interface T_WD_FUNC_ACCESS_REC {
  FUNCTION_NAME:string;ACCESS_LEVEL:number;
}

export type T_WD_FUNC_ACCESS_TAB = T_WD_FUNC_ACCESS_REC[]; 
export type T_WD_NUMBER_TAB = T_WD_NUMBER_REC[]; 
export interface T_WD_OPT_DATA_REC {
  FLD_ID:string;FIELD_VALUE:string;
}

export type T_WD_OPT_DATA_TAB = T_WD_OPT_DATA_REC[]; 
export interface T_WD_REPORT_REC {
  ROW_NUM:number;NAME:string;MSISDN:string;TRPL_NAME:string;ACCOUNT:string;CONTRACT_NUM:string;SIGN_DATE:OracleDate;ICC:string;ACTIVATION_DATE:OracleDate;DLR_NAME:string;DLR_ID:number;POS_CODE:string;FULL_NAME:string;LOGIN:string;SIM_CHANGE:OracleDate;CRE_DATE:OracleDate;OP_NAME:string;
}

export type T_WD_REPORT_TAB = T_WD_REPORT_REC[]; 
export type T_WD_VARCHAR2_2000_TAB = T_WD_VARCHAR2_2000_REC[]; 
export interface ADD_CONTRACT_FIELD_INPUT {
  I_APP_USER_ID: number;I_OBJECT_TYPE: number;I_FIELD_NAME: string;I_FIELD_SIZE: number;I_MAND: number;I_UFT_ID: number;I_OPT_VALUE?: T_FLD_VAL_LIST_TBL
}

export interface ADD_CONTRACT_FIELD_OUTPUT {
  O_RESULT: number
}

export function ADD_CONTRACT_FIELD(input:ADD_CONTRACT_FIELD_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.ADD_CONTRACT_FIELD(:I_APP_USER_ID,:I_OBJECT_TYPE,:I_FIELD_NAME,:I_FIELD_SIZE,:I_MAND,:I_UFT_ID,:I_OPT_VALUE,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME,},I_FIELD_SIZE:{type: NUMBER,dir: BIND_IN,val: input.I_FIELD_SIZE,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND,},I_UFT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_UFT_ID,},I_OPT_VALUE:{type: "T_FLD_VAL_LIST_TBL",dir: BIND_IN,val: input.I_OPT_VALUE || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface ADD_DOCUMENT_FIELD_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_CID_FLD_ID: string;I_FIELD_NAME: string;I_FIELD_SIZE: number;I_UFT_ID: number;I_MAND: number;I_ORD_UI: number;I_TEMPLATE?: string;I_OPT_VALUE?: T_FLD_VAL_LIST_TBL;I_COMMIT?: number
}

export interface ADD_DOCUMENT_FIELD_OUTPUT {
  O_RESULT: number
}

export function ADD_DOCUMENT_FIELD(input:ADD_DOCUMENT_FIELD_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.ADD_DOCUMENT_FIELD(:I_APP_USER_ID,:I_IDDOC_ID,:I_CID_FLD_ID,:I_FIELD_NAME,:I_FIELD_SIZE,:I_UFT_ID,:I_MAND,:I_ORD_UI,:I_TEMPLATE,:I_OPT_VALUE,:I_COMMIT,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_CID_FLD_ID:{type: STRING,dir: BIND_IN,val: input.I_CID_FLD_ID,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME,},I_FIELD_SIZE:{type: NUMBER,dir: BIND_IN,val: input.I_FIELD_SIZE,},I_UFT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_UFT_ID,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND,},I_ORD_UI:{type: NUMBER,dir: BIND_IN,val: input.I_ORD_UI,},I_TEMPLATE:{type: STRING,dir: BIND_IN,val: input.I_TEMPLATE || null,},I_OPT_VALUE:{type: "T_FLD_VAL_LIST_TBL",dir: BIND_IN,val: input.I_OPT_VALUE || null,},I_COMMIT:{type: NUMBER,dir: BIND_IN,val: input.I_COMMIT || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface ADD_IDENTIFY_DOCUMENT_INPUT {
  I_APP_USER_ID: number;I_IDDOC_NAME: string;I_IDDOC_FULL_NAME: string
}

export interface ADD_IDENTIFY_DOCUMENT_OUTPUT {
  O_RESULT: number
}

export function ADD_IDENTIFY_DOCUMENT(input:ADD_IDENTIFY_DOCUMENT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.ADD_IDENTIFY_DOCUMENT(:I_APP_USER_ID,:I_IDDOC_NAME,:I_IDDOC_FULL_NAME,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_NAME:{type: STRING,dir: BIND_IN,val: input.I_IDDOC_NAME,},I_IDDOC_FULL_NAME:{type: STRING,dir: BIND_IN,val: input.I_IDDOC_FULL_NAME,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface ADD_LOG_INPUT {
  I_APP_USER_ID: number;I_OP_ID: number;I_CLNT_ID?: number;I_DSC: string;I_POS_ID?: number;I_DATE_LOG?: OracleDate
}

export interface ADD_LOG_OUTPUT {
  O_RESULT: number
}

export function ADD_LOG(input:ADD_LOG_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.ADD_LOG(:I_APP_USER_ID,:I_OP_ID,:I_CLNT_ID,:I_DSC,:I_POS_ID,:I_DATE_LOG,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OP_ID:{type: NUMBER,dir: BIND_IN,val: input.I_OP_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID || null,},I_DSC:{type: STRING,dir: BIND_IN,val: input.I_DSC,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID || null,},I_DATE_LOG:{type: DATE,dir: BIND_IN,val: input.I_DATE_LOG || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface ADD_POS_INPUT {
  I_APP_USER_ID: number;I_DLR_ID: number;I_POS_CODE: string
}

export interface ADD_POS_OUTPUT {
  O_RESULT: number
}

export function ADD_POS(input:ADD_POS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.ADD_POS(:I_APP_USER_ID,:I_DLR_ID,:I_POS_CODE,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_POS_CODE:{type: STRING,dir: BIND_IN,val: input.I_POS_CODE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface ADD_USER_INPUT {
  I_APP_USER_ID: number;I_LOGIN: string;I_PASSWORD: string
}

export interface ADD_USER_OUTPUT {
  O_USER_ID: number;O_RESULT: number
}

export function ADD_USER(input:ADD_USER_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.ADD_USER(:I_APP_USER_ID,:I_LOGIN,:I_PASSWORD,:O_USER_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_LOGIN:{type: STRING,dir: BIND_IN,val: input.I_LOGIN,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},O_USER_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface CHANGE_ICC_INPUT {
  I_APP_USER_ID: number;I_ICC: string;I_ICC_NEW: string
}

export interface CHANGE_ICC_OUTPUT {
  O_RESULT: number
}

export function CHANGE_ICC(input:CHANGE_ICC_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.CHANGE_ICC(:I_APP_USER_ID,:I_ICC,:I_ICC_NEW,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_ICC:{type: STRING,dir: BIND_IN,val: input.I_ICC,},I_ICC_NEW:{type: STRING,dir: BIND_IN,val: input.I_ICC_NEW,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface CHANGE_ICC_BY_SUBS_INPUT {
  I_APP_USER_ID: number;I_MSISDN: string;I_ICC_NEW?: string;I_SURNAME: string;I_NAME: string;I_PATRONYMIC: string;I_DATE_OF_BIRTH: string;I_ACTION: string
}

export interface CHANGE_ICC_BY_SUBS_OUTPUT {
  O_MSISDN: string;O_ICC: string;O_BRANCH_ID: string;O_DLR_ID: string;O_CID_FIELDS: T_WD_OPT_DATA_TAB;O_RESULT: number
}

export function CHANGE_ICC_BY_SUBS(input:CHANGE_ICC_BY_SUBS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.CHANGE_ICC_BY_SUBS(:I_APP_USER_ID,:I_MSISDN,:I_ICC_NEW,:I_SURNAME,:I_NAME,:I_PATRONYMIC,:I_DATE_OF_BIRTH,:I_ACTION,:O_MSISDN,:O_ICC,:O_BRANCH_ID,:O_DLR_ID,:O_CID_FIELDS,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_MSISDN:{type: STRING,dir: BIND_IN,val: input.I_MSISDN,},I_ICC_NEW:{type: STRING,dir: BIND_IN,val: input.I_ICC_NEW || null,},I_SURNAME:{type: STRING,dir: BIND_IN,val: input.I_SURNAME,},I_NAME:{type: STRING,dir: BIND_IN,val: input.I_NAME,},I_PATRONYMIC:{type: STRING,dir: BIND_IN,val: input.I_PATRONYMIC,},I_DATE_OF_BIRTH:{type: STRING,dir: BIND_IN,val: input.I_DATE_OF_BIRTH,},I_ACTION:{type: STRING,dir: BIND_IN,val: input.I_ACTION,},O_MSISDN:{type: STRING,dir: BIND_OUT,},O_ICC:{type: STRING,dir: BIND_OUT,},O_BRANCH_ID:{type: STRING,dir: BIND_OUT,},O_DLR_ID:{type: STRING,dir: BIND_OUT,},O_CID_FIELDS:{type: "T_WD_OPT_DATA_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface CHANGE_POS_CODE_INPUT {
  I_APP_USER_ID: number;I_POS_ID: number;I_POS_CODE: string
}

export interface CHANGE_POS_CODE_OUTPUT {
  O_RESULT: number
}

export function CHANGE_POS_CODE(input:CHANGE_POS_CODE_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.CHANGE_POS_CODE(:I_APP_USER_ID,:I_POS_ID,:I_POS_CODE,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID,},I_POS_CODE:{type: STRING,dir: BIND_IN,val: input.I_POS_CODE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface CHANGE_USER_PASSWORD_INPUT {
  I_APP_USER_ID: number;I_PASSWORD: string;I_PASSWORD_NEW: string
}

export interface CHANGE_USER_PASSWORD_OUTPUT {
  O_RESULT: number
}

export function CHANGE_USER_PASSWORD(input:CHANGE_USER_PASSWORD_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.CHANGE_USER_PASSWORD(:I_APP_USER_ID,:I_PASSWORD,:I_PASSWORD_NEW,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},I_PASSWORD_NEW:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD_NEW,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface DEL_CUST_IDDOC_INPUT {
  I_APP_USER_ID: number;I_CID_ID: number
}

export interface DEL_CUST_IDDOC_OUTPUT {
  O_RESULT: number
}

export function DEL_CUST_IDDOC(input:DEL_CUST_IDDOC_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.DEL_CUST_IDDOC(:I_APP_USER_ID,:I_CID_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface DEL_DOCUMENT_HIERARCHY_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_PARENT_IDDOC_ID: number
}

export interface DEL_DOCUMENT_HIERARCHY_OUTPUT {
  O_RESULT: number
}

export function DEL_DOCUMENT_HIERARCHY(input:DEL_DOCUMENT_HIERARCHY_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.DEL_DOCUMENT_HIERARCHY(:I_APP_USER_ID,:I_IDDOC_ID,:I_PARENT_IDDOC_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_PARENT_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_PARENT_IDDOC_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface DEL_POS_INPUT {
  I_APP_USER_ID: number;I_POS_ID: number
}

export interface DEL_POS_OUTPUT {
  O_RESULT: number
}

export function DEL_POS(input:DEL_POS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.DEL_POS(:I_APP_USER_ID,:I_POS_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface DEL_USER_INPUT {
  I_APP_USER_ID: number;I_DEL_USER_ID: number
}

export interface DEL_USER_OUTPUT {
  O_RESULT: number
}

export function DEL_USER(input:DEL_USER_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.DEL_USER(:I_APP_USER_ID,:I_DEL_USER_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_DEL_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DEL_USER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_BLOCKED_USER_LIST_INPUT {
  I_APP_USER_ID: number
}

export interface GET_BLOCKED_USER_LIST_OUTPUT {
  O_USER_ID_TAB: T_USER_TAB;O_RESULT: number
}

export function GET_BLOCKED_USER_LIST(input:GET_BLOCKED_USER_LIST_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_BLOCKED_USER_LIST(:I_APP_USER_ID,:O_USER_ID_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_USER_ID_TAB:{type: "WD_CORE.T_USER_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_BRANCH_LIST_INPUT {
  I_APP_USER_ID: number
}

export interface GET_BRANCH_LIST_OUTPUT {
  O_BRANCH_TAB: T_BRANCH_TAB;O_RESULT: number
}

export function GET_BRANCH_LIST(input:GET_BRANCH_LIST_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_BRANCH_LIST(:I_APP_USER_ID,:O_BRANCH_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_BRANCH_TAB:{type: "WD_CORE.T_BRANCH_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_CONTRACT_INPUT {
  I_APP_USER_ID: number;I_MSISDN?: string;I_ICC?: string
}

export interface GET_CONTRACT_OUTPUT {
  O_MSISDN: string;O_ICC: string;O_BRANCH_ID: number;O_DLR_ID: number;O_CONRACT_NUM: number;O_SUBS_ID: number;O_CUST_TYPE_ID: number;O_CLNT_ID: number;O_CUSTOMER_ID: number;O_SIGN_DATE: OracleDate;O_REGISTRATION_DATE: OracleDate;O_FIRST_CALL: OracleDate;O_ACTIVATION_DATE: OracleDate;O_NAME: string;O_CLNT_OPT_DATA: T_WD_OPT_DATA_TAB;O_SUBS_OPT_DATA: T_WD_OPT_DATA_TAB;O_RESULT: number
}

export function GET_CONTRACT(input:GET_CONTRACT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_CONTRACT(:I_APP_USER_ID,:I_MSISDN,:I_ICC,:O_MSISDN,:O_ICC,:O_BRANCH_ID,:O_DLR_ID,:O_CONRACT_NUM,:O_SUBS_ID,:O_CUST_TYPE_ID,:O_CLNT_ID,:O_CUSTOMER_ID,:O_SIGN_DATE,:O_REGISTRATION_DATE,:O_FIRST_CALL,:O_ACTIVATION_DATE,:O_NAME,:O_CLNT_OPT_DATA,:O_SUBS_OPT_DATA,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_MSISDN:{type: STRING,dir: BIND_IN,val: input.I_MSISDN || null,},I_ICC:{type: STRING,dir: BIND_IN,val: input.I_ICC || null,},O_MSISDN:{type: STRING,dir: BIND_OUT,},O_ICC:{type: STRING,dir: BIND_OUT,},O_BRANCH_ID:{type: NUMBER,dir: BIND_OUT,},O_DLR_ID:{type: NUMBER,dir: BIND_OUT,},O_CONRACT_NUM:{type: NUMBER,dir: BIND_OUT,},O_SUBS_ID:{type: NUMBER,dir: BIND_OUT,},O_CUST_TYPE_ID:{type: NUMBER,dir: BIND_OUT,},O_CLNT_ID:{type: NUMBER,dir: BIND_OUT,},O_CUSTOMER_ID:{type: NUMBER,dir: BIND_OUT,},O_SIGN_DATE:{type: DATE,dir: BIND_OUT,},O_REGISTRATION_DATE:{type: DATE,dir: BIND_OUT,},O_FIRST_CALL:{type: DATE,dir: BIND_OUT,},O_ACTIVATION_DATE:{type: DATE,dir: BIND_OUT,},O_NAME:{type: STRING,dir: BIND_OUT,},O_CLNT_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_OUT,},O_SUBS_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_CONTRACT_FIELDS_INPUT {
  I_APP_USER_ID: number;I_OBJECT_TYPE: number
}

export interface GET_CONTRACT_FIELDS_OUTPUT {
  O_CONTRACT_FIELD_TAB: T_CONTRACT_FIELD_TAB;O_RESULT: number
}

export function GET_CONTRACT_FIELDS(input:GET_CONTRACT_FIELDS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_CONTRACT_FIELDS(:I_APP_USER_ID,:I_OBJECT_TYPE,:O_CONTRACT_FIELD_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},O_CONTRACT_FIELD_TAB:{type: "WD_CORE.T_CONTRACT_FIELD_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_CONTRACT_FIELDS_SETTING_INPUT {
  I_APP_USER_ID: number;I_OBJECT_TYPE: number
}

export interface GET_CONTRACT_FIELDS_SETTING_OUTPUT {
  O_CONTRACT_FIELD_EXT_TAB: T_CONTRACT_FIELD_EXT_TAB;O_RESULT: number
}

export function GET_CONTRACT_FIELDS_SETTING(input:GET_CONTRACT_FIELDS_SETTING_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_CONTRACT_FIELDS_SETTING(:I_APP_USER_ID,:I_OBJECT_TYPE,:O_CONTRACT_FIELD_EXT_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},O_CONTRACT_FIELD_EXT_TAB:{type: "WD_CORE.T_CONTRACT_FIELD_EXT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_CUSTOMER_VALIDATION_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID?: number;I_CLNT_ID?: number;I_SUBS_ID?: number
}

export interface GET_CUSTOMER_VALIDATION_OUTPUT {
  O_CVI_STATUS_ID: number;O_CVI_STATUS_DESCRIPTION: string;O_CVI_CLNT_STATUS: number;O_RESULT: number
}

export function GET_CUSTOMER_VALIDATION(input:GET_CUSTOMER_VALIDATION_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_CUSTOMER_VALIDATION(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CLNT_ID,:I_SUBS_ID,:O_CVI_STATUS_ID,:O_CVI_STATUS_DESCRIPTION,:O_CVI_CLNT_STATUS,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID || null,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID || null,},I_SUBS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_SUBS_ID || null,},O_CVI_STATUS_ID:{type: NUMBER,dir: BIND_OUT,},O_CVI_STATUS_DESCRIPTION:{type: STRING,dir: BIND_OUT,},O_CVI_CLNT_STATUS:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_CUST_ADDR_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CLNT_ID: number;I_ADDR_TYPE_ID?: number
}

export interface GET_CUST_ADDR_OUTPUT {
  O_CUST_ADDR_TAB: T_WD_CUST_ADDR_TAB;O_RESULT: number
}

export function GET_CUST_ADDR(input:GET_CUST_ADDR_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_CUST_ADDR(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CLNT_ID,:I_ADDR_TYPE_ID,:O_CUST_ADDR_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_ADDR_TYPE_ID:{type: NUMBER,dir: BIND_IN,val: input.I_ADDR_TYPE_ID || null,},O_CUST_ADDR_TAB:{type: "T_WD_CUST_ADDR_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_CUST_IDDOC_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CID_ID?: number
}

export interface GET_CUST_IDDOC_OUTPUT {
  O_CID_TAB: T_WD_CID_TAB;O_RESULT: number
}

export function GET_CUST_IDDOC(input:GET_CUST_IDDOC_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_CUST_IDDOC(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CID_ID,:O_CID_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID || null,},O_CID_TAB:{type: "T_WD_CID_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DEALER_LIST_INPUT {
  I_APP_USER_ID: number;I_BRANCH_ID?: number
}

export interface GET_DEALER_LIST_OUTPUT {
  O_DLR_TAB: T_DLR_TAB;O_RESULT: number
}

export function GET_DEALER_LIST(input:GET_DEALER_LIST_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DEALER_LIST(:I_APP_USER_ID,:I_BRANCH_ID,:O_DLR_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID || null,},O_DLR_TAB:{type: "WD_CORE.T_DLR_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DICT_INPUT {
  I_APP_USER_ID: number;I_DICT_NAME: string
}

export interface GET_DICT_OUTPUT {
  O_DICT: T_WD_DICT_TAB;O_RESULT: number
}

export function GET_DICT(input:GET_DICT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DICT(:I_APP_USER_ID,:I_DICT_NAME,:O_DICT,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_DICT_NAME:{type: STRING,dir: BIND_IN,val: input.I_DICT_NAME,},O_DICT:{type: "T_WD_DICT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DIC_FIELD_INPUT {
  I_APP_USER_ID: number
}

export interface GET_DIC_FIELD_OUTPUT {
  O_DOC_TYPES: T_DOC_TYPES_TBL;O_DOC_FIELDS: T_DOC_FIELDS_TBL;O_RESULT: number
}

export function GET_DIC_FIELD(input:GET_DIC_FIELD_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DIC_FIELD(:I_APP_USER_ID,:O_DOC_TYPES,:O_DOC_FIELDS,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_DOC_TYPES:{type: "T_DOC_TYPES_TBL",dir: BIND_OUT,},O_DOC_FIELDS:{type: "T_DOC_FIELDS_TBL",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DOCUMENT_FIELDS_INPUT {
  I_APP_USER_ID: number
}

export interface GET_DOCUMENT_FIELDS_OUTPUT {
  O_DOCUMENT_FIELD_TAB: T_DOCUMENT_FIELD_TAB;O_RESULT: number
}

export function GET_DOCUMENT_FIELDS(input:GET_DOCUMENT_FIELDS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_FIELDS(:I_APP_USER_ID,:O_DOCUMENT_FIELD_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_DOCUMENT_FIELD_TAB:{type: "WD_CORE.T_DOCUMENT_FIELD_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DOCUMENT_FIELDS_SETTING_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID?: number
}

export interface GET_DOCUMENT_FIELDS_SETTING_OUTPUT {
  O_DOCUMENT_FIELD_EXT_TAB: T_DOCUMENT_FIELD_EXT_TAB;O_RESULT: number
}

export function GET_DOCUMENT_FIELDS_SETTING(input:GET_DOCUMENT_FIELDS_SETTING_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_FIELDS_SETTING(:I_APP_USER_ID,:I_IDDOC_ID,:O_DOCUMENT_FIELD_EXT_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID || null,},O_DOCUMENT_FIELD_EXT_TAB:{type: "WD_CORE.T_DOCUMENT_FIELD_EXT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DOCUMENT_FIELD_DICT_INPUT {
  I_APP_USER_ID: number
}

export interface GET_DOCUMENT_FIELD_DICT_OUTPUT {
  O_DOCUMENT_DICT_TAB: T_DOCUMENT_DICT_TAB;O_RESULT: number
}

export function GET_DOCUMENT_FIELD_DICT(input:GET_DOCUMENT_FIELD_DICT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_FIELD_DICT(:I_APP_USER_ID,:O_DOCUMENT_DICT_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_DOCUMENT_DICT_TAB:{type: "WD_CORE.T_DOCUMENT_DICT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_DOCUMENT_HIERARCHY_INPUT {
  I_APP_USER_ID: number;I_PARENT_IDDOC_ID?: number
}

export interface GET_DOCUMENT_HIERARCHY_OUTPUT {
  O_DOCUMENT_HIERARCHY: T_WD_DOC_HIERARCHY_TAB;O_RESULT: number
}

export function GET_DOCUMENT_HIERARCHY(input:GET_DOCUMENT_HIERARCHY_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_HIERARCHY(:I_APP_USER_ID,:I_PARENT_IDDOC_ID,:O_DOCUMENT_HIERARCHY,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_PARENT_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_PARENT_IDDOC_ID || null,},O_DOCUMENT_HIERARCHY:{type: "T_WD_DOC_HIERARCHY_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_FIELD_TYPES_INPUT {
  I_APP_USER_ID: number
}

export interface GET_FIELD_TYPES_OUTPUT {
  O_FIELD_TYPES_TAB: T_FIELD_TYPES_TAB;O_RESULT: number
}

export function GET_FIELD_TYPES(input:GET_FIELD_TYPES_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_FIELD_TYPES(:I_APP_USER_ID,:O_FIELD_TYPES_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_FIELD_TYPES_TAB:{type: "WD_CORE.T_FIELD_TYPES_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_IDENTIFY_DOCUMENT_INPUT {
  I_APP_USER_ID: number
}

export interface GET_IDENTIFY_DOCUMENT_OUTPUT {
  O_CID_TYPES_TAB: T_CID_TYPES_TAB;O_RESULT: number
}

export function GET_IDENTIFY_DOCUMENT(input:GET_IDENTIFY_DOCUMENT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_IDENTIFY_DOCUMENT(:I_APP_USER_ID,:O_CID_TYPES_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_CID_TYPES_TAB:{type: "WD_CORE.T_CID_TYPES_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_PARAMETER_INPUT {
  I_APP_USER_ID: number;I_PARAM_NAME: string;I_DLR_ID?: number;I_USER_ID?: number
}

export interface GET_PARAMETER_OUTPUT {
  O_PARAM_NUM_VALUE: number;O_PARAM_STRING_VALUE: string;O_RESULT: number
}

export function GET_PARAMETER(input:GET_PARAMETER_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_PARAMETER(:I_APP_USER_ID,:I_PARAM_NAME,:I_DLR_ID,:I_USER_ID,:O_PARAM_NUM_VALUE,:O_PARAM_STRING_VALUE,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_PARAM_NAME:{type: STRING,dir: BIND_IN,val: input.I_PARAM_NAME,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID || null,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID || null,},O_PARAM_NUM_VALUE:{type: NUMBER,dir: BIND_OUT,},O_PARAM_STRING_VALUE:{type: STRING,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_POS_LIST_INPUT {
  I_APP_USER_ID: number;I_BRANCH_ID?: number;I_DLR_ID?: number
}

export interface GET_POS_LIST_OUTPUT {
  O_DLR_POS_TAB: T_DLR_POS_TAB;O_RESULT: number
}

export function GET_POS_LIST(input:GET_POS_LIST_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_POS_LIST(:I_APP_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:O_DLR_POS_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID || null,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID || null,},O_DLR_POS_TAB:{type: "WD_CORE.T_DLR_POS_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_REPORT_INPUT {
  I_APP_USER_ID: number;I_USER_ID?: number;I_BRANCH_ID?: number;I_DLR_ID?: number;I_POS_ID?: number;I_OPTION?: number;I_DATE_STIME?: OracleDate;I_DATE_ETIME?: OracleDate;I_GET_FROM?: number;I_ROW_COUNT?: number
}

export interface GET_REPORT_OUTPUT {
  O_REPORT_TAB: T_WD_REPORT_TAB;O_TOTAL_COUNT: number;O_RESULT: number
}

export function GET_REPORT(input:GET_REPORT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_REPORT(:I_APP_USER_ID,:I_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:I_POS_ID,:I_OPTION,:I_DATE_STIME,:I_DATE_ETIME,:I_GET_FROM,:I_ROW_COUNT,:O_REPORT_TAB,:O_TOTAL_COUNT,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID || null,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID || null,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID || null,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID || null,},I_OPTION:{type: NUMBER,dir: BIND_IN,val: input.I_OPTION || null,},I_DATE_STIME:{type: DATE,dir: BIND_IN,val: input.I_DATE_STIME || null,},I_DATE_ETIME:{type: DATE,dir: BIND_IN,val: input.I_DATE_ETIME || null,},I_GET_FROM:{type: NUMBER,dir: BIND_IN,val: input.I_GET_FROM || null,},I_ROW_COUNT:{type: NUMBER,dir: BIND_IN,val: input.I_ROW_COUNT || null,},O_REPORT_TAB:{type: "T_WD_REPORT_TAB",dir: BIND_OUT,},O_TOTAL_COUNT:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_USER_ACCESS_INPUT {
  I_APP_USER_ID: number
}

export interface GET_USER_ACCESS_OUTPUT {
  O_ROLE_DEF: T_WD_VARCHAR2_2000_TAB;O_FUNC_ACCESS: T_WD_FUNC_ACCESS_TAB;O_POS_ID: T_WD_NUMBER_TAB;O_BRANCH_ID: number;O_DLR_ID: number;O_RESULT: number
}

export function GET_USER_ACCESS(input:GET_USER_ACCESS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_USER_ACCESS(:I_APP_USER_ID,:O_ROLE_DEF,:O_FUNC_ACCESS,:O_POS_ID,:O_BRANCH_ID,:O_DLR_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_ROLE_DEF:{type: "T_WD_VARCHAR2_2000_TAB",dir: BIND_OUT,},O_FUNC_ACCESS:{type: "T_WD_FUNC_ACCESS_TAB",dir: BIND_OUT,},O_POS_ID:{type: "T_WD_NUMBER_TAB",dir: BIND_OUT,},O_BRANCH_ID:{type: NUMBER,dir: BIND_OUT,},O_DLR_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_USER_LIST_INPUT {
  I_APP_USER_ID: number;I_BRANCH_ID?: number;I_DLR_ID?: number;I_LOGIN_MASK?: string
}

export interface GET_USER_LIST_OUTPUT {
  O_USER_TAB: T_USER_TAB;O_RESULT: number
}

export function GET_USER_LIST(input:GET_USER_LIST_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_USER_LIST(:I_APP_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:I_LOGIN_MASK,:O_USER_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID || null,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID || null,},I_LOGIN_MASK:{type: STRING,dir: BIND_IN,val: input.I_LOGIN_MASK || null,},O_USER_TAB:{type: "WD_CORE.T_USER_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_USER_SETTINGS_INPUT {
  I_APP_USER_ID: number;I_LOGIN: string
}

export interface GET_USER_SETTINGS_OUTPUT {
  O_USER_ID: number;O_BRANCH_ID: number;O_DLR_ID: number;O_REPORT_ACCESS: number;O_US_ID: number;O_FULL_NAME: string;O_PASSWORD: string;O_ROLE_DEF: T_WD_VARCHAR2_2000_TAB;O_POS_ID: T_WD_NUMBER_TAB;O_RESULT: number
}

export function GET_USER_SETTINGS(input:GET_USER_SETTINGS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_USER_SETTINGS(:I_APP_USER_ID,:I_LOGIN,:O_USER_ID,:O_BRANCH_ID,:O_DLR_ID,:O_REPORT_ACCESS,:O_US_ID,:O_FULL_NAME,:O_PASSWORD,:O_ROLE_DEF,:O_POS_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_LOGIN:{type: STRING,dir: BIND_IN,val: input.I_LOGIN,},O_USER_ID:{type: NUMBER,dir: BIND_OUT,},O_BRANCH_ID:{type: NUMBER,dir: BIND_OUT,},O_DLR_ID:{type: NUMBER,dir: BIND_OUT,},O_REPORT_ACCESS:{type: NUMBER,dir: BIND_OUT,},O_US_ID:{type: NUMBER,dir: BIND_OUT,},O_FULL_NAME:{type: STRING,dir: BIND_OUT,},O_PASSWORD:{type: STRING,dir: BIND_OUT,},O_ROLE_DEF:{type: "T_WD_VARCHAR2_2000_TAB",dir: BIND_OUT,},O_POS_ID:{type: "T_WD_NUMBER_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface GET_WD_CUST_NAME_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number
}

export interface GET_WD_CUST_NAME_OUTPUT {
  O_CUST_NAME_TAB: T_WD_CUST_NAME_TAB;O_RESULT: number
}

export function GET_WD_CUST_NAME(input:GET_WD_CUST_NAME_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.GET_WD_CUST_NAME(:I_APP_USER_ID,:I_CUSTOMER_ID,:O_CUST_NAME_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},O_CUST_NAME_TAB:{type: "T_WD_CUST_NAME_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface SET_CONTRACT_FIELD_SETTING_INPUT {
  I_APP_USER_ID: number;I_FIELD_ID: number;I_OBJECT_TYPE: number;I_FIELD_NAME?: string;I_MAND?: number;I_USE?: number;I_VALIDATION_ID?: number
}

export interface SET_CONTRACT_FIELD_SETTING_OUTPUT {
  O_RESULT: number
}

export function SET_CONTRACT_FIELD_SETTING(input:SET_CONTRACT_FIELD_SETTING_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.SET_CONTRACT_FIELD_SETTING(:I_APP_USER_ID,:I_FIELD_ID,:I_OBJECT_TYPE,:I_FIELD_NAME,:I_MAND,:I_USE,:I_VALIDATION_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_FIELD_ID:{type: NUMBER,dir: BIND_IN,val: input.I_FIELD_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME || null,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND || null,},I_USE:{type: NUMBER,dir: BIND_IN,val: input.I_USE || null,},I_VALIDATION_ID:{type: NUMBER,dir: BIND_IN,val: input.I_VALIDATION_ID || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface SET_CUSTOMER_VALIDATION_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number
}

export interface SET_CUSTOMER_VALIDATION_OUTPUT {
  O_RESULT: number
}

export function SET_CUSTOMER_VALIDATION(input:SET_CUSTOMER_VALIDATION_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.SET_CUSTOMER_VALIDATION(:I_APP_USER_ID,:I_CUSTOMER_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface SET_DOCUMENT_FIELD_SETTING_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_CID_FLD_ID: string;I_FIELD_NAME?: string;I_MAND?: number;I_USE?: number
}

export interface SET_DOCUMENT_FIELD_SETTING_OUTPUT {
  O_RESULT: number
}

export function SET_DOCUMENT_FIELD_SETTING(input:SET_DOCUMENT_FIELD_SETTING_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.SET_DOCUMENT_FIELD_SETTING(:I_APP_USER_ID,:I_IDDOC_ID,:I_CID_FLD_ID,:I_FIELD_NAME,:I_MAND,:I_USE,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_CID_FLD_ID:{type: STRING,dir: BIND_IN,val: input.I_CID_FLD_ID,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME || null,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND || null,},I_USE:{type: NUMBER,dir: BIND_IN,val: input.I_USE || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface SET_DOCUMENT_HIERARCHY_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_PARENT_IDDOC_ID: number
}

export interface SET_DOCUMENT_HIERARCHY_OUTPUT {
  O_RESULT: number
}

export function SET_DOCUMENT_HIERARCHY(input:SET_DOCUMENT_HIERARCHY_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.SET_DOCUMENT_HIERARCHY(:I_APP_USER_ID,:I_IDDOC_ID,:I_PARENT_IDDOC_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_PARENT_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_PARENT_IDDOC_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface SET_PARAMETER_INPUT {
  I_APP_USER_ID: number;I_PARAM_NAME: string;I_DLR_ID?: number;I_USER_ID?: number;I_PARAM_NUM_VALUE?: number;I_PARAM_STRING_VALUE?: string
}

export interface SET_PARAMETER_OUTPUT {
  O_RESULT: number
}

export function SET_PARAMETER(input:SET_PARAMETER_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.SET_PARAMETER(:I_APP_USER_ID,:I_PARAM_NAME,:I_DLR_ID,:I_USER_ID,:I_PARAM_NUM_VALUE,:I_PARAM_STRING_VALUE,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_PARAM_NAME:{type: STRING,dir: BIND_IN,val: input.I_PARAM_NAME,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID || null,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID || null,},I_PARAM_NUM_VALUE:{type: NUMBER,dir: BIND_IN,val: input.I_PARAM_NUM_VALUE || null,},I_PARAM_STRING_VALUE:{type: STRING,dir: BIND_IN,val: input.I_PARAM_STRING_VALUE || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface SET_USER_SETTINGS_INPUT {
  I_APP_USER_ID: number;I_USER_ID: number;I_BRANCH_ID?: number;I_DLR_ID?: number;I_REPORT_ACCESS?: number;I_US_ID?: number;I_FULL_NAME?: string;I_PASSWORD?: string;I_ROLE_DEF: T_WD_VARCHAR2_2000_TAB;I_POS_ID: T_WD_NUMBER_TAB
}

export interface SET_USER_SETTINGS_OUTPUT {
  O_RESULT: number
}

export function SET_USER_SETTINGS(input:SET_USER_SETTINGS_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.SET_USER_SETTINGS(:I_APP_USER_ID,:I_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:I_REPORT_ACCESS,:I_US_ID,:I_FULL_NAME,:I_PASSWORD,:I_ROLE_DEF,:I_POS_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID || null,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID || null,},I_REPORT_ACCESS:{type: NUMBER,dir: BIND_IN,val: input.I_REPORT_ACCESS || null,},I_US_ID:{type: NUMBER,dir: BIND_IN,val: input.I_US_ID || null,},I_FULL_NAME:{type: STRING,dir: BIND_IN,val: input.I_FULL_NAME || null,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD || null,},I_ROLE_DEF:{type: "T_WD_VARCHAR2_2000_TAB",dir: BIND_IN,val: input.I_ROLE_DEF,},I_POS_ID:{type: "T_WD_NUMBER_TAB",dir: BIND_IN,val: input.I_POS_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface UNBLOCK_USER_INPUT {
  I_APP_USER_ID: number;I_BLOCKED_USER_ID: number
}

export interface UNBLOCK_USER_OUTPUT {
  O_RESULT: number
}

export function UNBLOCK_USER(input:UNBLOCK_USER_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.UNBLOCK_USER(:I_APP_USER_ID,:I_BLOCKED_USER_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BLOCKED_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BLOCKED_USER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface UPDATE_CONTRACT_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_SIGN_DATE?: OracleDate;I_CLNT_ID?: number;I_CLNT_OPT_DATA?: T_WD_OPT_DATA_TAB;I_SUBS_ID?: number;I_SUBS_OPT_DATA?: T_WD_OPT_DATA_TAB
}

export interface UPDATE_CONTRACT_OUTPUT {
  O_RESULT: number
}

export function UPDATE_CONTRACT(input:UPDATE_CONTRACT_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.UPDATE_CONTRACT(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_SIGN_DATE,:I_CLNT_ID,:I_CLNT_OPT_DATA,:I_SUBS_ID,:I_SUBS_OPT_DATA,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_SIGN_DATE:{type: DATE,dir: BIND_IN,val: input.I_SIGN_DATE || null,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID || null,},I_CLNT_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_IN,val: input.I_CLNT_OPT_DATA || null,},I_SUBS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_SUBS_ID || null,},I_SUBS_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_IN,val: input.I_SUBS_OPT_DATA || null,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface UPDATE_CUST_ADDR_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CLNT_ID: number;I_ADDR_TYPE_ID: number;I_CUST_ADDR_DET_TAB: T_WD_CUST_ADDR_DET_TAB
}

export interface UPDATE_CUST_ADDR_OUTPUT {
  O_RESULT: number
}

export function UPDATE_CUST_ADDR(input:UPDATE_CUST_ADDR_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.UPDATE_CUST_ADDR(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CLNT_ID,:I_ADDR_TYPE_ID,:I_CUST_ADDR_DET_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_ADDR_TYPE_ID:{type: NUMBER,dir: BIND_IN,val: input.I_ADDR_TYPE_ID,},I_CUST_ADDR_DET_TAB:{type: "T_WD_CUST_ADDR_DET_TAB",dir: BIND_IN,val: input.I_CUST_ADDR_DET_TAB,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface UPDATE_CUST_IDDOC_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CID_TAB: T_WD_CID_TAB
}

export interface UPDATE_CUST_IDDOC_OUTPUT {
  O_CID_ID: number;O_RESULT: number
}

export function UPDATE_CUST_IDDOC(input:UPDATE_CUST_IDDOC_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.UPDATE_CUST_IDDOC(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CID_TAB,:O_CID_ID,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CID_TAB:{type: "T_WD_CID_TAB",dir: BIND_IN,val: input.I_CID_TAB,},O_CID_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface UPDATE_CUST_NAME_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CUST_NAME_TAB: T_WD_CUST_NAME_TAB
}

export interface UPDATE_CUST_NAME_OUTPUT {
  O_RESULT: number
}

export function UPDATE_CUST_NAME(input:UPDATE_CUST_NAME_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.UPDATE_CUST_NAME(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CUST_NAME_TAB,:O_RESULT)";
  const binds: BindParameters = { I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CUST_NAME_TAB:{type: "T_WD_CUST_NAME_TAB",dir: BIND_IN,val: input.I_CUST_NAME_TAB,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}

export interface USER_AUTHENTICATION_INPUT {
  I_LOGIN: string;I_PASSWORD: string
}

export interface USER_AUTHENTICATION_OUTPUT {
  O_USER_ID: number;O_RESULT: number
}

export function USER_AUTHENTICATION(input:USER_AUTHENTICATION_INPUT): OracleProcedureData {
  const sql = "CALL WD_CORE.USER_AUTHENTICATION(:I_LOGIN,:I_PASSWORD,:O_USER_ID,:O_RESULT)";
  const binds: BindParameters = { I_LOGIN:{type: STRING,dir: BIND_IN,val: input.I_LOGIN,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},O_USER_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,} };

  return { binds, sql };
}
