import * from "./types"


export interface ADD_CONTRACT_FIELD_INPUT {
  I_APP_USER_ID: number;I_OBJECT_TYPE: number;I_FIELD_NAME: string;I_FIELD_SIZE: number;I_MAND: number;I_UFT_ID: number;I_OPT_VALUE: T_FLD_VAL_LIST_TBL
}

export interface ADD_CONTRACT_FIELD_OUTPUT {
  O_RESULT: number
}

export function ADD_CONTRACT_FIELD(input:ADD_CONTRACT_FIELD_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.ADD_CONTRACT_FIELD(:I_APP_USER_ID,:I_OBJECT_TYPE,:I_FIELD_NAME,:I_FIELD_SIZE,:I_MAND,:I_UFT_ID,:I_OPT_VALUE,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME,},I_FIELD_SIZE:{type: NUMBER,dir: BIND_IN,val: input.I_FIELD_SIZE,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND,},I_UFT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_UFT_ID,},I_OPT_VALUE:{type: "T_FLD_VAL_LIST_TBL",dir: BIND_IN,val: input.I_OPT_VALUE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface ADD_DOCUMENT_FIELD_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_CID_FLD_ID: string;I_FIELD_NAME: string;I_FIELD_SIZE: number;I_UFT_ID: number;I_MAND: number;I_ORD_UI: number;I_TEMPLATE: string;I_OPT_VALUE: T_FLD_VAL_LIST_TBL;I_COMMIT: number
}

export interface ADD_DOCUMENT_FIELD_OUTPUT {
  O_RESULT: number
}

export function ADD_DOCUMENT_FIELD(input:ADD_DOCUMENT_FIELD_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.ADD_DOCUMENT_FIELD(:I_APP_USER_ID,:I_IDDOC_ID,:I_CID_FLD_ID,:I_FIELD_NAME,:I_FIELD_SIZE,:I_UFT_ID,:I_MAND,:I_ORD_UI,:I_TEMPLATE,:I_OPT_VALUE,:I_COMMIT,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_CID_FLD_ID:{type: STRING,dir: BIND_IN,val: input.I_CID_FLD_ID,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME,},I_FIELD_SIZE:{type: NUMBER,dir: BIND_IN,val: input.I_FIELD_SIZE,},I_UFT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_UFT_ID,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND,},I_ORD_UI:{type: NUMBER,dir: BIND_IN,val: input.I_ORD_UI,},I_TEMPLATE:{type: STRING,dir: BIND_IN,val: input.I_TEMPLATE,},I_OPT_VALUE:{type: "T_FLD_VAL_LIST_TBL",dir: BIND_IN,val: input.I_OPT_VALUE,},I_COMMIT:{type: NUMBER,dir: BIND_IN,val: input.I_COMMIT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface ADD_IDENTIFY_DOCUMENT_INPUT {
  I_APP_USER_ID: number;I_IDDOC_NAME: string;I_IDDOC_FULL_NAME: string
}

export interface ADD_IDENTIFY_DOCUMENT_OUTPUT {
  O_RESULT: number
}

export function ADD_IDENTIFY_DOCUMENT(input:ADD_IDENTIFY_DOCUMENT_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.ADD_IDENTIFY_DOCUMENT(:I_APP_USER_ID,:I_IDDOC_NAME,:I_IDDOC_FULL_NAME,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_NAME:{type: STRING,dir: BIND_IN,val: input.I_IDDOC_NAME,},I_IDDOC_FULL_NAME:{type: STRING,dir: BIND_IN,val: input.I_IDDOC_FULL_NAME,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface ADD_LOG_INPUT {
  I_APP_USER_ID: number;I_OP_ID: number;I_CLNT_ID: number;I_DSC: string;I_POS_ID: number;I_DATE_LOG: OracleDate
}

export interface ADD_LOG_OUTPUT {
  O_RESULT: number
}

export function ADD_LOG(input:ADD_LOG_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.ADD_LOG(:I_APP_USER_ID,:I_OP_ID,:I_CLNT_ID,:I_DSC,:I_POS_ID,:I_DATE_LOG,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OP_ID:{type: NUMBER,dir: BIND_IN,val: input.I_OP_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_DSC:{type: STRING,dir: BIND_IN,val: input.I_DSC,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID,},I_DATE_LOG:{type: DATE,dir: BIND_IN,val: input.I_DATE_LOG,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface ADD_POS_INPUT {
  P_WORD: string;I_APP_USER_ID: number;P_POS: string;I_DLR_ID: number;P_OFFSET: number;I_POS_CODE: string;P_LENGTH: number;P_IS_NEW_WORD: number;P_IS_IN_LEXICON: number
}

export interface ADD_POS_OUTPUT {
  O_RESULT: number
}

export function ADD_POS(input:ADD_POS_INPUT): PlSqlData {
  const sql = "CALL DRVIMR.ADD_POS(:P_WORD,:I_APP_USER_ID,:P_POS,:I_DLR_ID,:P_OFFSET,:I_POS_CODE,:P_LENGTH,:O_RESULT,:P_IS_NEW_WORD,:P_IS_IN_LEXICON)";
  const binds: BindParameters = P_WORD:{type: STRING,dir: BIND_IN,val: input.P_WORD,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},P_POS:{type: STRING,dir: BIND_IN,val: input.P_POS,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},P_OFFSET:{type: NUMBER,dir: BIND_IN,val: input.P_OFFSET,},I_POS_CODE:{type: STRING,dir: BIND_IN,val: input.I_POS_CODE,},P_LENGTH:{type: NUMBER,dir: BIND_IN,val: input.P_LENGTH,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},P_IS_NEW_WORD:{type: NUMBER,dir: BIND_IN,val: input.P_IS_NEW_WORD,},P_IS_IN_LEXICON:{type: NUMBER,dir: BIND_IN,val: input.P_IS_IN_LEXICON,};

  return { binds, sql };
}

export interface ADD_USER_INPUT {
  I_APP_USER_ID: number;I_LOGIN: string;I_PASSWORD: string
}

export interface ADD_USER_OUTPUT {
  O_USER_ID: number;O_RESULT: number
}

export function ADD_USER(input:ADD_USER_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.ADD_USER(:I_APP_USER_ID,:I_LOGIN,:I_PASSWORD,:O_USER_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_LOGIN:{type: STRING,dir: BIND_IN,val: input.I_LOGIN,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},O_USER_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface CHANGE_ICC_INPUT {
  I_APP_USER_ID: number;I_ICC: string;I_ICC_NEW: string
}

export interface CHANGE_ICC_OUTPUT {
  O_RESULT: number
}

export function CHANGE_ICC(input:CHANGE_ICC_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.CHANGE_ICC(:I_APP_USER_ID,:I_ICC,:I_ICC_NEW,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_ICC:{type: STRING,dir: BIND_IN,val: input.I_ICC,},I_ICC_NEW:{type: STRING,dir: BIND_IN,val: input.I_ICC_NEW,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface CHANGE_ICC_BY_SUBS_INPUT {
  I_APP_USER_ID: number;I_MSISDN: string;I_ICC_NEW: string;I_SURNAME: string;I_NAME: string;I_PATRONYMIC: string;I_DATE_OF_BIRTH: string;I_ACTION: string
}

export interface CHANGE_ICC_BY_SUBS_OUTPUT {
  O_MSISDN: string;O_ICC: string;O_BRANCH_ID: string;O_DLR_ID: string;O_CID_FIELDS: T_WD_OPT_DATA_TAB;O_RESULT: number
}

export function CHANGE_ICC_BY_SUBS(input:CHANGE_ICC_BY_SUBS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.CHANGE_ICC_BY_SUBS(:I_APP_USER_ID,:I_MSISDN,:I_ICC_NEW,:I_SURNAME,:I_NAME,:I_PATRONYMIC,:I_DATE_OF_BIRTH,:I_ACTION,:O_MSISDN,:O_ICC,:O_BRANCH_ID,:O_DLR_ID,:O_CID_FIELDS,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_MSISDN:{type: STRING,dir: BIND_IN,val: input.I_MSISDN,},I_ICC_NEW:{type: STRING,dir: BIND_IN,val: input.I_ICC_NEW,},I_SURNAME:{type: STRING,dir: BIND_IN,val: input.I_SURNAME,},I_NAME:{type: STRING,dir: BIND_IN,val: input.I_NAME,},I_PATRONYMIC:{type: STRING,dir: BIND_IN,val: input.I_PATRONYMIC,},I_DATE_OF_BIRTH:{type: STRING,dir: BIND_IN,val: input.I_DATE_OF_BIRTH,},I_ACTION:{type: STRING,dir: BIND_IN,val: input.I_ACTION,},O_MSISDN:{type: STRING,dir: BIND_OUT,},O_ICC:{type: STRING,dir: BIND_OUT,},O_BRANCH_ID:{type: STRING,dir: BIND_OUT,},O_DLR_ID:{type: STRING,dir: BIND_OUT,},O_CID_FIELDS:{type: "T_WD_OPT_DATA_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface CHANGE_POS_CODE_INPUT {
  I_APP_USER_ID: number;I_POS_ID: number;I_POS_CODE: string
}

export interface CHANGE_POS_CODE_OUTPUT {
  O_RESULT: number
}

export function CHANGE_POS_CODE(input:CHANGE_POS_CODE_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.CHANGE_POS_CODE(:I_APP_USER_ID,:I_POS_ID,:I_POS_CODE,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID,},I_POS_CODE:{type: STRING,dir: BIND_IN,val: input.I_POS_CODE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface CHANGE_USER_PASSWORD_INPUT {
  I_APP_USER_ID: number;I_PASSWORD: string;I_PASSWORD_NEW: string
}

export interface CHANGE_USER_PASSWORD_OUTPUT {
  O_RESULT: number
}

export function CHANGE_USER_PASSWORD(input:CHANGE_USER_PASSWORD_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.CHANGE_USER_PASSWORD(:I_APP_USER_ID,:I_PASSWORD,:I_PASSWORD_NEW,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},I_PASSWORD_NEW:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD_NEW,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface DEL_CUST_IDDOC_INPUT {
  I_CID_ID: number;I_APP_USER_ID: number;I_DEL_USER_ID: number;I_CID_ID: number;I_DEL_DATE: OracleDate;I_COMMIT: number
}

export interface DEL_CUST_IDDOC_OUTPUT {
  O_RESULT: number;O_RESULT: number;O_ERR_MSG: string
}

export function DEL_CUST_IDDOC(input:DEL_CUST_IDDOC_INPUT): PlSqlData {
  const sql = "CALL INV_CUSTOMER.DEL_CUST_IDDOC(:I_CID_ID,:I_APP_USER_ID,:I_DEL_USER_ID,:I_CID_ID,:I_DEL_DATE,:O_RESULT,:I_COMMIT,:O_RESULT,:O_ERR_MSG)";
  const binds: BindParameters = I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_DEL_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DEL_USER_ID,},I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},I_DEL_DATE:{type: DATE,dir: BIND_IN,val: input.I_DEL_DATE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},I_COMMIT:{type: NUMBER,dir: BIND_IN,val: input.I_COMMIT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,};

  return { binds, sql };
}

export interface DEL_DOCUMENT_HIERARCHY_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_PARENT_IDDOC_ID: number
}

export interface DEL_DOCUMENT_HIERARCHY_OUTPUT {
  O_RESULT: number
}

export function DEL_DOCUMENT_HIERARCHY(input:DEL_DOCUMENT_HIERARCHY_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.DEL_DOCUMENT_HIERARCHY(:I_APP_USER_ID,:I_IDDOC_ID,:I_PARENT_IDDOC_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_PARENT_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_PARENT_IDDOC_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface DEL_POS_INPUT {
  I_APP_USER_ID: number;I_POS_ID: number
}

export interface DEL_POS_OUTPUT {
  O_RESULT: number
}

export function DEL_POS(input:DEL_POS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.DEL_POS(:I_APP_USER_ID,:I_POS_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface DEL_USER_INPUT {
  I_APP_USER_ID: number;I_DEL_USER_ID: number
}

export interface DEL_USER_OUTPUT {
  O_RESULT: number
}

export function DEL_USER(input:DEL_USER_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.DEL_USER(:I_APP_USER_ID,:I_DEL_USER_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_DEL_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DEL_USER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_BLOCKED_USER_LIST_INPUT {
  I_APP_USER_ID: number
}

export interface GET_BLOCKED_USER_LIST_OUTPUT {
  O_USER_ID_TAB: T_USER_TAB;O_RESULT: number
}

export function GET_BLOCKED_USER_LIST(input:GET_BLOCKED_USER_LIST_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_BLOCKED_USER_LIST(:I_APP_USER_ID,:O_USER_ID_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_USER_ID_TAB:{type: "T_USER_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_BRANCH_LIST_INPUT {
  I_APP_USER_ID: number
}

export interface GET_BRANCH_LIST_OUTPUT {
  O_BRANCH_TAB: T_BRANCH_TAB;O_RESULT: number
}

export function GET_BRANCH_LIST(input:GET_BRANCH_LIST_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_BRANCH_LIST(:I_APP_USER_ID,:O_BRANCH_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_BRANCH_TAB:{type: "T_BRANCH_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_CONTRACT_INPUT {
  I_APP_USER_ID: number;I_MSISDN: string;I_ICC: string
}

export interface GET_CONTRACT_OUTPUT {
  O_MSISDN: string;O_ICC: string;O_BRANCH_ID: number;O_DLR_ID: number;O_CONRACT_NUM: number;O_SUBS_ID: number;O_CUST_TYPE_ID: number;O_CLNT_ID: number;O_CUSTOMER_ID: number;O_SIGN_DATE: OracleDate;O_REGISTRATION_DATE: OracleDate;O_FIRST_CALL: OracleDate;O_ACTIVATION_DATE: OracleDate;O_NAME: string;O_CLNT_OPT_DATA: T_WD_OPT_DATA_TAB;O_SUBS_OPT_DATA: T_WD_OPT_DATA_TAB;O_RESULT: number
}

export function GET_CONTRACT(input:GET_CONTRACT_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_CONTRACT(:I_APP_USER_ID,:I_MSISDN,:I_ICC,:O_MSISDN,:O_ICC,:O_BRANCH_ID,:O_DLR_ID,:O_CONRACT_NUM,:O_SUBS_ID,:O_CUST_TYPE_ID,:O_CLNT_ID,:O_CUSTOMER_ID,:O_SIGN_DATE,:O_REGISTRATION_DATE,:O_FIRST_CALL,:O_ACTIVATION_DATE,:O_NAME,:O_CLNT_OPT_DATA,:O_SUBS_OPT_DATA,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_MSISDN:{type: STRING,dir: BIND_IN,val: input.I_MSISDN,},I_ICC:{type: STRING,dir: BIND_IN,val: input.I_ICC,},O_MSISDN:{type: STRING,dir: BIND_OUT,},O_ICC:{type: STRING,dir: BIND_OUT,},O_BRANCH_ID:{type: NUMBER,dir: BIND_OUT,},O_DLR_ID:{type: NUMBER,dir: BIND_OUT,},O_CONRACT_NUM:{type: NUMBER,dir: BIND_OUT,},O_SUBS_ID:{type: NUMBER,dir: BIND_OUT,},O_CUST_TYPE_ID:{type: NUMBER,dir: BIND_OUT,},O_CLNT_ID:{type: NUMBER,dir: BIND_OUT,},O_CUSTOMER_ID:{type: NUMBER,dir: BIND_OUT,},O_SIGN_DATE:{type: DATE,dir: BIND_OUT,},O_REGISTRATION_DATE:{type: DATE,dir: BIND_OUT,},O_FIRST_CALL:{type: DATE,dir: BIND_OUT,},O_ACTIVATION_DATE:{type: DATE,dir: BIND_OUT,},O_NAME:{type: STRING,dir: BIND_OUT,},O_CLNT_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_OUT,},O_SUBS_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_CONTRACT_FIELDS_INPUT {
  I_APP_USER_ID: number;I_OBJECT_TYPE: number
}

export interface GET_CONTRACT_FIELDS_OUTPUT {
  O_CONTRACT_FIELD_TAB: T_CONTRACT_FIELD_TAB;O_RESULT: number
}

export function GET_CONTRACT_FIELDS(input:GET_CONTRACT_FIELDS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_CONTRACT_FIELDS(:I_APP_USER_ID,:I_OBJECT_TYPE,:O_CONTRACT_FIELD_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},O_CONTRACT_FIELD_TAB:{type: "T_CONTRACT_FIELD_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_CONTRACT_FIELDS_SETTING_INPUT {
  I_APP_USER_ID: number;I_OBJECT_TYPE: number
}

export interface GET_CONTRACT_FIELDS_SETTING_OUTPUT {
  O_CONTRACT_FIELD_EXT_TAB: T_CONTRACT_FIELD_EXT_TAB;O_RESULT: number
}

export function GET_CONTRACT_FIELDS_SETTING(input:GET_CONTRACT_FIELDS_SETTING_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_CONTRACT_FIELDS_SETTING(:I_APP_USER_ID,:I_OBJECT_TYPE,:O_CONTRACT_FIELD_EXT_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},O_CONTRACT_FIELD_EXT_TAB:{type: "T_CONTRACT_FIELD_EXT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_CUSTOMER_VALIDATION_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CLNT_ID: number;I_SUBS_ID: number
}

export interface GET_CUSTOMER_VALIDATION_OUTPUT {
  O_CVI_STATUS_ID: number;O_CVI_STATUS_DESCRIPTION: string;O_CVI_CLNT_STATUS: number;O_RESULT: number
}

export function GET_CUSTOMER_VALIDATION(input:GET_CUSTOMER_VALIDATION_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_CUSTOMER_VALIDATION(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CLNT_ID,:I_SUBS_ID,:O_CVI_STATUS_ID,:O_CVI_STATUS_DESCRIPTION,:O_CVI_CLNT_STATUS,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_SUBS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_SUBS_ID,},O_CVI_STATUS_ID:{type: NUMBER,dir: BIND_OUT,},O_CVI_STATUS_DESCRIPTION:{type: STRING,dir: BIND_OUT,},O_CVI_CLNT_STATUS:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_CUST_ADDR_INPUT {
  I_CSTMR_ID: number;I_APP_USER_ID: number;I_CUST_ADDR_ID: number;I_CUSTOMER_ID: number;I_LANG_ID: number;I_CLNT_ID: number;I_ADDR_TYPE_ID: number
}

export interface GET_CUST_ADDR_OUTPUT {
  O_CUST_ADDR_TAB: T_WD_CUST_ADDR_TAB;O_RESULT: number
}

export function GET_CUST_ADDR(input:GET_CUST_ADDR_INPUT): PlSqlData {
  const sql = "CALL INV_CUSTOMER.GET_CUST_ADDR(:I_CSTMR_ID,:I_APP_USER_ID,:I_CUST_ADDR_ID,:I_CUSTOMER_ID,:I_LANG_ID,:I_CLNT_ID,:I_ADDR_TYPE_ID,:O_CUST_ADDR_TAB,:O_RESULT)";
  const binds: BindParameters = I_CSTMR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CSTMR_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUST_ADDR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUST_ADDR_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_LANG_ID:{type: NUMBER,dir: BIND_IN,val: input.I_LANG_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_ADDR_TYPE_ID:{type: NUMBER,dir: BIND_IN,val: input.I_ADDR_TYPE_ID,},O_CUST_ADDR_TAB:{type: "T_WD_CUST_ADDR_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_CUST_IDDOC_INPUT {
  I_CUSTOMER_ID: number;I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CID_ID: number
}

export interface GET_CUST_IDDOC_OUTPUT {
  O_RESULT: number;O_ERR_MSG: string;O_CID_TAB: T_WD_CID_TAB;O_RESULT: number
}

export function GET_CUST_IDDOC(input:GET_CUST_IDDOC_INPUT): PlSqlData {
  const sql = "CALL INV_CUSTOMER.GET_CUST_IDDOC(:I_CUSTOMER_ID,:I_APP_USER_ID,:O_RESULT,:I_CUSTOMER_ID,:O_ERR_MSG,:I_CID_ID,:O_CID_TAB,:O_RESULT)";
  const binds: BindParameters = I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,},I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},O_CID_TAB:{type: "T_WD_CID_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DEALER_LIST_INPUT {
  I_APP_USER_ID: number;I_BRANCH_ID: number
}

export interface GET_DEALER_LIST_OUTPUT {
  O_DLR_TAB: T_DLR_TAB;O_RESULT: number
}

export function GET_DEALER_LIST(input:GET_DEALER_LIST_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DEALER_LIST(:I_APP_USER_ID,:I_BRANCH_ID,:O_DLR_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID,},O_DLR_TAB:{type: "T_DLR_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DICT_INPUT {
  I_APP_USER_ID: number;I_DICT_NAME: string
}

export interface GET_DICT_OUTPUT {
  O_DICT: T_WD_DICT_TAB;O_RESULT: number
}

export function GET_DICT(input:GET_DICT_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DICT(:I_APP_USER_ID,:I_DICT_NAME,:O_DICT,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_DICT_NAME:{type: STRING,dir: BIND_IN,val: input.I_DICT_NAME,},O_DICT:{type: "T_WD_DICT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DIC_FIELD_INPUT {
  I_APP_USER_ID: number
}

export interface GET_DIC_FIELD_OUTPUT {
  O_DOC_TYPES: T_DOC_TYPES_TBL;O_DOC_FIELDS: T_DOC_FIELDS_TBL;O_RESULT: number
}

export function GET_DIC_FIELD(input:GET_DIC_FIELD_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DIC_FIELD(:I_APP_USER_ID,:O_DOC_TYPES,:O_DOC_FIELDS,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_DOC_TYPES:{type: "T_DOC_TYPES_TBL",dir: BIND_OUT,},O_DOC_FIELDS:{type: "T_DOC_FIELDS_TBL",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DOCUMENT_FIELDS_INPUT {
  I_APP_USER_ID: number
}

export interface GET_DOCUMENT_FIELDS_OUTPUT {
  O_DOCUMENT_FIELD_TAB: T_DOCUMENT_FIELD_TAB;O_RESULT: number
}

export function GET_DOCUMENT_FIELDS(input:GET_DOCUMENT_FIELDS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_FIELDS(:I_APP_USER_ID,:O_DOCUMENT_FIELD_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_DOCUMENT_FIELD_TAB:{type: "T_DOCUMENT_FIELD_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DOCUMENT_FIELDS_SETTING_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number
}

export interface GET_DOCUMENT_FIELDS_SETTING_OUTPUT {
  O_DOCUMENT_FIELD_EXT_TAB: T_DOCUMENT_FIELD_EXT_TAB;O_RESULT: number
}

export function GET_DOCUMENT_FIELDS_SETTING(input:GET_DOCUMENT_FIELDS_SETTING_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_FIELDS_SETTING(:I_APP_USER_ID,:I_IDDOC_ID,:O_DOCUMENT_FIELD_EXT_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},O_DOCUMENT_FIELD_EXT_TAB:{type: "T_DOCUMENT_FIELD_EXT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DOCUMENT_FIELD_DICT_INPUT {
  I_APP_USER_ID: number
}

export interface GET_DOCUMENT_FIELD_DICT_OUTPUT {
  O_DOCUMENT_DICT_TAB: T_DOCUMENT_DICT_TAB;O_RESULT: number
}

export function GET_DOCUMENT_FIELD_DICT(input:GET_DOCUMENT_FIELD_DICT_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_FIELD_DICT(:I_APP_USER_ID,:O_DOCUMENT_DICT_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_DOCUMENT_DICT_TAB:{type: "T_DOCUMENT_DICT_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_DOCUMENT_HIERARCHY_INPUT {
  I_APP_USER_ID: number;I_PARENT_IDDOC_ID: number
}

export interface GET_DOCUMENT_HIERARCHY_OUTPUT {
  O_DOCUMENT_HIERARCHY: T_WD_DOC_HIERARCHY_TAB;O_RESULT: number
}

export function GET_DOCUMENT_HIERARCHY(input:GET_DOCUMENT_HIERARCHY_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_DOCUMENT_HIERARCHY(:I_APP_USER_ID,:I_PARENT_IDDOC_ID,:O_DOCUMENT_HIERARCHY,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_PARENT_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_PARENT_IDDOC_ID,},O_DOCUMENT_HIERARCHY:{type: "T_WD_DOC_HIERARCHY_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_FIELD_TYPES_INPUT {
  I_APP_USER_ID: number
}

export interface GET_FIELD_TYPES_OUTPUT {
  O_FIELD_TYPES_TAB: T_FIELD_TYPES_TAB;O_RESULT: number
}

export function GET_FIELD_TYPES(input:GET_FIELD_TYPES_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_FIELD_TYPES(:I_APP_USER_ID,:O_FIELD_TYPES_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_FIELD_TYPES_TAB:{type: "T_FIELD_TYPES_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_IDENTIFY_DOCUMENT_INPUT {
  I_APP_USER_ID: number
}

export interface GET_IDENTIFY_DOCUMENT_OUTPUT {
  O_CID_TYPES_TAB: T_CID_TYPES_TAB;O_RESULT: number
}

export function GET_IDENTIFY_DOCUMENT(input:GET_IDENTIFY_DOCUMENT_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_IDENTIFY_DOCUMENT(:I_APP_USER_ID,:O_CID_TYPES_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_CID_TYPES_TAB:{type: "T_CID_TYPES_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_PARAMETER_INPUT {
  LOG_TYPE: BINARY_INTEGER;I_APP_USER_ID: number;LOG_PARAMETER: BINARY_INTEGER;I_PARAM_NAME: string;I_DLR_ID: number;I_USER_ID: number
}

export interface GET_PARAMETER_OUTPUT {
  O_PARAM_NUM_VALUE: number;O_PARAM_STRING_VALUE: string;O_RESULT: number
}

export function GET_PARAMETER(input:GET_PARAMETER_INPUT): PlSqlData {
  const sql = "CALL DBMS_CUBE_LOG.GET_PARAMETER(:LOG_TYPE,:I_APP_USER_ID,:LOG_PARAMETER,:I_PARAM_NAME,:I_DLR_ID,:I_USER_ID,:O_PARAM_NUM_VALUE,:O_PARAM_STRING_VALUE,:O_RESULT)";
  const binds: BindParameters = LOG_TYPE:{type: BINARY_INTEGER,dir: BIND_IN,val: input.LOG_TYPE,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},LOG_PARAMETER:{type: BINARY_INTEGER,dir: BIND_IN,val: input.LOG_PARAMETER,},I_PARAM_NAME:{type: STRING,dir: BIND_IN,val: input.I_PARAM_NAME,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID,},O_PARAM_NUM_VALUE:{type: NUMBER,dir: BIND_OUT,},O_PARAM_STRING_VALUE:{type: STRING,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_POS_LIST_INPUT {
  I_APP_USER_ID: number;I_BRANCH_ID: number;I_DLR_ID: number
}

export interface GET_POS_LIST_OUTPUT {
  O_DLR_POS_TAB: T_DLR_POS_TAB;O_RESULT: number
}

export function GET_POS_LIST(input:GET_POS_LIST_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_POS_LIST(:I_APP_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:O_DLR_POS_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},O_DLR_POS_TAB:{type: "T_DLR_POS_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_REPORT_INPUT {
  SELF: WRI$_REPT_ABSTRACT_T;SELF: WRI$_REPT_SQLPI;SELF: WRI$_REPT_SQLT;SELF: WRI$_REPT_XPLAN;SELF: WRI$_REPT_DBREPLAY;SELF: WRI$_REPT_SQLMONITOR;SELF: WRI$_REPT_PLAN_DIFF;SELF: WRI$_REPT_SPMEVOLVE;SELF: WRI$_REPT_CONFIG;SELF: WRI$_REPT_STORAGE;SELF: WRI$_REPT_SECURITY;SELF: WRI$_REPT_MEMORY;SELF: WRI$_REPT_ASH;SELF: WRI$_REPT_AWRV;SELF: WRI$_REPT_ADDM;SELF: WRI$_REPT_RTADDM;SELF: WRI$_REPT_PERF;SELF: WRI$_REPT_SQLDETAIL;SELF: WRI$_REPT_SESSION;SELF: WRI$_REPT_DBHOME;SELF: WRI$_REPT_OPTSTATS;SELF: WRI$_REPT_ARC;SELF: WRI$_REPT_EMX_PERF;SELF: WRI$_REPT_TCB;SELF: WRI$_REPT_CELL;REPORT_REFERENCE: string;REPORT_REFERENCE: string;TASK_NAME: string;P_PAGE_ID: number;I_APP_USER_ID: number;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;REPORT_REFERENCE: string;COMPRESS_XML: BINARY_INTEGER;P_REGION_ID: number;I_USER_ID: number;COMPRESS_XML: BINARY_INTEGER;P_REPORT_ID: number;I_BRANCH_ID: number;I_DLR_ID: number;I_POS_ID: number;I_OPTION: number;I_DATE_STIME: OracleDate;I_DATE_ETIME: OracleDate;I_GET_FROM: number;I_ROW_COUNT: number
}

export interface GET_REPORT_OUTPUT {
  CONTENT_TYPE: number;O_REPORT_TAB: T_WD_REPORT_TAB;O_TOTAL_COUNT: number;O_RESULT: number
}

export function GET_REPORT(input:GET_REPORT_INPUT): PlSqlData {
  const sql = "CALL WRI$_REPT_ABSTRACT_T.GET_REPORT(:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:SELF,:REPORT_REFERENCE,:REPORT_REFERENCE,:TASK_NAME,:P_PAGE_ID,:I_APP_USER_ID,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:REPORT_REFERENCE,:CONTENT_TYPE,:COMPRESS_XML,:P_REGION_ID,:I_USER_ID,:COMPRESS_XML,:P_REPORT_ID,:I_BRANCH_ID,:I_DLR_ID,:I_POS_ID,:I_OPTION,:I_DATE_STIME,:I_DATE_ETIME,:I_GET_FROM,:I_ROW_COUNT,:O_REPORT_TAB,:O_TOTAL_COUNT,:O_RESULT)";
  const binds: BindParameters = SELF:{type: "WRI$_REPT_ABSTRACT_T",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SQLPI",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SQLT",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_XPLAN",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_DBREPLAY",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SQLMONITOR",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_PLAN_DIFF",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SPMEVOLVE",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_CONFIG",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_STORAGE",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SECURITY",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_MEMORY",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_ASH",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_AWRV",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_ADDM",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_RTADDM",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_PERF",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SQLDETAIL",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_SESSION",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_DBHOME",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_OPTSTATS",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_ARC",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_EMX_PERF",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_TCB",dir: BIND_IN,val: input.SELF,},SELF:{type: "WRI$_REPT_CELL",dir: BIND_IN,val: input.SELF,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},TASK_NAME:{type: STRING,dir: BIND_IN,val: input.TASK_NAME,},P_PAGE_ID:{type: NUMBER,dir: BIND_IN,val: input.P_PAGE_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},REPORT_REFERENCE:{type: STRING,dir: BIND_IN,val: input.REPORT_REFERENCE,},CONTENT_TYPE:{type: NUMBER,dir: BIND_OUT,},COMPRESS_XML:{type: BINARY_INTEGER,dir: BIND_IN,val: input.COMPRESS_XML,},P_REGION_ID:{type: NUMBER,dir: BIND_IN,val: input.P_REGION_ID,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID,},COMPRESS_XML:{type: BINARY_INTEGER,dir: BIND_IN,val: input.COMPRESS_XML,},P_REPORT_ID:{type: NUMBER,dir: BIND_IN,val: input.P_REPORT_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_POS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_POS_ID,},I_OPTION:{type: NUMBER,dir: BIND_IN,val: input.I_OPTION,},I_DATE_STIME:{type: DATE,dir: BIND_IN,val: input.I_DATE_STIME,},I_DATE_ETIME:{type: DATE,dir: BIND_IN,val: input.I_DATE_ETIME,},I_GET_FROM:{type: NUMBER,dir: BIND_IN,val: input.I_GET_FROM,},I_ROW_COUNT:{type: NUMBER,dir: BIND_IN,val: input.I_ROW_COUNT,},O_REPORT_TAB:{type: "T_WD_REPORT_TAB",dir: BIND_OUT,},O_TOTAL_COUNT:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_USER_ACCESS_INPUT {
  I_APP_USER_ID: number
}

export interface GET_USER_ACCESS_OUTPUT {
  O_ROLE_DEF: T_WD_VARCHAR2_2000_TAB;O_FUNC_ACCESS: T_WD_FUNC_ACCESS_TAB;O_POS_ID: T_WD_NUMBER_TAB;O_BRANCH_ID: number;O_DLR_ID: number;O_RESULT: number
}

export function GET_USER_ACCESS(input:GET_USER_ACCESS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_USER_ACCESS(:I_APP_USER_ID,:O_ROLE_DEF,:O_FUNC_ACCESS,:O_POS_ID,:O_BRANCH_ID,:O_DLR_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},O_ROLE_DEF:{type: STRING,dir: BIND_OUT,},O_FUNC_ACCESS:{type: "T_WD_FUNC_ACCESS_TAB",dir: BIND_OUT,},O_POS_ID:{type: "T_WD_NUMBER_TAB",dir: BIND_OUT,},O_BRANCH_ID:{type: NUMBER,dir: BIND_OUT,},O_DLR_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_USER_LIST_INPUT {
  I_APP_USER_ID: number;I_BRANCH_ID: number;I_DLR_ID: number;I_LOGIN_MASK: string
}

export interface GET_USER_LIST_OUTPUT {
  O_USER_TAB: T_USER_TAB;O_RESULT: number
}

export function GET_USER_LIST(input:GET_USER_LIST_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_USER_LIST(:I_APP_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:I_LOGIN_MASK,:O_USER_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_LOGIN_MASK:{type: STRING,dir: BIND_IN,val: input.I_LOGIN_MASK,},O_USER_TAB:{type: "T_USER_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_USER_SETTINGS_INPUT {
  I_APP_USER_ID: number;I_LOGIN: string
}

export interface GET_USER_SETTINGS_OUTPUT {
  O_USER_ID: number;O_BRANCH_ID: number;O_DLR_ID: number;O_REPORT_ACCESS: number;O_US_ID: number;O_FULL_NAME: string;O_PASSWORD: string;O_ROLE_DEF: T_WD_VARCHAR2_2000_TAB;O_POS_ID: T_WD_NUMBER_TAB;O_RESULT: number
}

export function GET_USER_SETTINGS(input:GET_USER_SETTINGS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_USER_SETTINGS(:I_APP_USER_ID,:I_LOGIN,:O_USER_ID,:O_BRANCH_ID,:O_DLR_ID,:O_REPORT_ACCESS,:O_US_ID,:O_FULL_NAME,:O_PASSWORD,:O_ROLE_DEF,:O_POS_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_LOGIN:{type: STRING,dir: BIND_IN,val: input.I_LOGIN,},O_USER_ID:{type: NUMBER,dir: BIND_OUT,},O_BRANCH_ID:{type: NUMBER,dir: BIND_OUT,},O_DLR_ID:{type: NUMBER,dir: BIND_OUT,},O_REPORT_ACCESS:{type: NUMBER,dir: BIND_OUT,},O_US_ID:{type: NUMBER,dir: BIND_OUT,},O_FULL_NAME:{type: STRING,dir: BIND_OUT,},O_PASSWORD:{type: STRING,dir: BIND_OUT,},O_ROLE_DEF:{type: STRING,dir: BIND_OUT,},O_POS_ID:{type: "T_WD_NUMBER_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface GET_WD_CUST_NAME_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number
}

export interface GET_WD_CUST_NAME_OUTPUT {
  O_CUST_NAME_TAB: T_WD_CUST_NAME_TAB;O_RESULT: number
}

export function GET_WD_CUST_NAME(input:GET_WD_CUST_NAME_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.GET_WD_CUST_NAME(:I_APP_USER_ID,:I_CUSTOMER_ID,:O_CUST_NAME_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},O_CUST_NAME_TAB:{type: "T_WD_CUST_NAME_TAB",dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface SET_CONTRACT_FIELD_SETTING_INPUT {
  I_APP_USER_ID: number;I_FIELD_ID: number;I_OBJECT_TYPE: number;I_FIELD_NAME: string;I_MAND: number;I_USE: number;I_VALIDATION_ID: number
}

export interface SET_CONTRACT_FIELD_SETTING_OUTPUT {
  O_RESULT: number
}

export function SET_CONTRACT_FIELD_SETTING(input:SET_CONTRACT_FIELD_SETTING_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.SET_CONTRACT_FIELD_SETTING(:I_APP_USER_ID,:I_FIELD_ID,:I_OBJECT_TYPE,:I_FIELD_NAME,:I_MAND,:I_USE,:I_VALIDATION_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_FIELD_ID:{type: NUMBER,dir: BIND_IN,val: input.I_FIELD_ID,},I_OBJECT_TYPE:{type: NUMBER,dir: BIND_IN,val: input.I_OBJECT_TYPE,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND,},I_USE:{type: NUMBER,dir: BIND_IN,val: input.I_USE,},I_VALIDATION_ID:{type: NUMBER,dir: BIND_IN,val: input.I_VALIDATION_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface SET_CUSTOMER_VALIDATION_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number
}

export interface SET_CUSTOMER_VALIDATION_OUTPUT {
  O_RESULT: number
}

export function SET_CUSTOMER_VALIDATION(input:SET_CUSTOMER_VALIDATION_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.SET_CUSTOMER_VALIDATION(:I_APP_USER_ID,:I_CUSTOMER_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface SET_DOCUMENT_FIELD_SETTING_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_CID_FLD_ID: string;I_FIELD_NAME: string;I_MAND: number;I_USE: number
}

export interface SET_DOCUMENT_FIELD_SETTING_OUTPUT {
  O_RESULT: number
}

export function SET_DOCUMENT_FIELD_SETTING(input:SET_DOCUMENT_FIELD_SETTING_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.SET_DOCUMENT_FIELD_SETTING(:I_APP_USER_ID,:I_IDDOC_ID,:I_CID_FLD_ID,:I_FIELD_NAME,:I_MAND,:I_USE,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_CID_FLD_ID:{type: STRING,dir: BIND_IN,val: input.I_CID_FLD_ID,},I_FIELD_NAME:{type: STRING,dir: BIND_IN,val: input.I_FIELD_NAME,},I_MAND:{type: NUMBER,dir: BIND_IN,val: input.I_MAND,},I_USE:{type: NUMBER,dir: BIND_IN,val: input.I_USE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface SET_DOCUMENT_HIERARCHY_INPUT {
  I_APP_USER_ID: number;I_IDDOC_ID: number;I_PARENT_IDDOC_ID: number
}

export interface SET_DOCUMENT_HIERARCHY_OUTPUT {
  O_RESULT: number
}

export function SET_DOCUMENT_HIERARCHY(input:SET_DOCUMENT_HIERARCHY_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.SET_DOCUMENT_HIERARCHY(:I_APP_USER_ID,:I_IDDOC_ID,:I_PARENT_IDDOC_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_PARENT_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_PARENT_IDDOC_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface SET_PARAMETER_INPUT {
  HANDLE: number;HANDLE: number;HANDLE: number;LOG_TYPE: BINARY_INTEGER;I_APP_USER_ID: number;NAME: string;NAME: string;NAME: string;LOG_PARAMETER: BINARY_INTEGER;I_PARAM_NAME: string;VALUE: PL/SQL BOOLEAN;VALUE: number;VALUE: string;VALUE: BINARY_INTEGER;I_DLR_ID: number;I_USER_ID: number;I_PARAM_NUM_VALUE: number;I_PARAM_STRING_VALUE: string
}

export interface SET_PARAMETER_OUTPUT {
  O_RESULT: number
}

export function SET_PARAMETER(input:SET_PARAMETER_INPUT): PlSqlData {
  const sql = "CALL DBMS_METADATA.SET_PARAMETER(:HANDLE,:HANDLE,:HANDLE,:LOG_TYPE,:I_APP_USER_ID,:NAME,:NAME,:NAME,:LOG_PARAMETER,:I_PARAM_NAME,:VALUE,:VALUE,:VALUE,:VALUE,:I_DLR_ID,:I_USER_ID,:I_PARAM_NUM_VALUE,:I_PARAM_STRING_VALUE,:O_RESULT)";
  const binds: BindParameters = HANDLE:{type: NUMBER,dir: BIND_IN,val: input.HANDLE,},HANDLE:{type: NUMBER,dir: BIND_IN,val: input.HANDLE,},HANDLE:{type: NUMBER,dir: BIND_IN,val: input.HANDLE,},LOG_TYPE:{type: BINARY_INTEGER,dir: BIND_IN,val: input.LOG_TYPE,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},NAME:{type: STRING,dir: BIND_IN,val: input.NAME,},NAME:{type: STRING,dir: BIND_IN,val: input.NAME,},NAME:{type: STRING,dir: BIND_IN,val: input.NAME,},LOG_PARAMETER:{type: BINARY_INTEGER,dir: BIND_IN,val: input.LOG_PARAMETER,},I_PARAM_NAME:{type: STRING,dir: BIND_IN,val: input.I_PARAM_NAME,},VALUE:{type: PL/SQL BOOLEAN,dir: BIND_IN,val: input.VALUE,},VALUE:{type: NUMBER,dir: BIND_IN,val: input.VALUE,},VALUE:{type: STRING,dir: BIND_IN,val: input.VALUE,},VALUE:{type: BINARY_INTEGER,dir: BIND_IN,val: input.VALUE,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID,},I_PARAM_NUM_VALUE:{type: NUMBER,dir: BIND_IN,val: input.I_PARAM_NUM_VALUE,},I_PARAM_STRING_VALUE:{type: STRING,dir: BIND_IN,val: input.I_PARAM_STRING_VALUE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface SET_USER_SETTINGS_INPUT {
  I_APP_USER_ID: number;I_USER_ID: number;I_BRANCH_ID: number;I_DLR_ID: number;I_REPORT_ACCESS: number;I_US_ID: number;I_FULL_NAME: string;I_PASSWORD: string;I_ROLE_DEF: T_WD_VARCHAR2_2000_TAB;I_POS_ID: T_WD_NUMBER_TAB
}

export interface SET_USER_SETTINGS_OUTPUT {
  O_RESULT: number
}

export function SET_USER_SETTINGS(input:SET_USER_SETTINGS_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.SET_USER_SETTINGS(:I_APP_USER_ID,:I_USER_ID,:I_BRANCH_ID,:I_DLR_ID,:I_REPORT_ACCESS,:I_US_ID,:I_FULL_NAME,:I_PASSWORD,:I_ROLE_DEF,:I_POS_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_USER_ID,},I_BRANCH_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BRANCH_ID,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_REPORT_ACCESS:{type: NUMBER,dir: BIND_IN,val: input.I_REPORT_ACCESS,},I_US_ID:{type: NUMBER,dir: BIND_IN,val: input.I_US_ID,},I_FULL_NAME:{type: STRING,dir: BIND_IN,val: input.I_FULL_NAME,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},I_ROLE_DEF:{type: STRING,dir: BIND_IN,val: input.I_ROLE_DEF,},I_POS_ID:{type: "T_WD_NUMBER_TAB",dir: BIND_IN,val: input.I_POS_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface UNBLOCK_USER_INPUT {
  I_APP_USER_ID: number;I_BLOCKED_USER_ID: number
}

export interface UNBLOCK_USER_OUTPUT {
  O_RESULT: number
}

export function UNBLOCK_USER(input:UNBLOCK_USER_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.UNBLOCK_USER(:I_APP_USER_ID,:I_BLOCKED_USER_ID,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_BLOCKED_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BLOCKED_USER_ID,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface UPDATE_CONTRACT_INPUT {
  I_CLNT_ID: number;I_APP_USER_ID: number;I_CNTR_NUM: string;I_CUSTOMER_ID: number;I_DLR_ID: number;I_SIGN_DATE: OracleDate;I_NAME: string;I_CLNT_ID: number;I_ADDR_INDEX: string;I_CLNT_OPT_DATA: T_WD_OPT_DATA_TAB;I_ADDR_CITY: string;I_SUBS_ID: number;I_ADDR_STREET: string;I_SUBS_OPT_DATA: T_WD_OPT_DATA_TAB;I_ADDR_HOUSE: string;I_ADDR_COMMENT: string;I_ADDR_NAME: string;I_LOC_CITY: string;I_LOC_STREET: string;I_LOC_HOUSE: string;I_LOC_INDEX: string;I_DG_ID: number;I_BDT_ID: number;I_CNTR_PHONE: string;I_PASPORT: string;I_INN: string;I_SIGN: OracleDate;I_CONTACT_FACE: string;I_MIN_INVOICE_SUM: number;I_TRRC: string;I_GNDR_ID: number;I_DATE_OF_BIRTH: OracleDate;I_TARGET_DATE: OracleDate;I_COMMIT: number;I_CHANGE_DLR: number;I_CHANGE_ORDER: number;I_CHARGE_CHANGE_ORDER: number;I_FROM_INV_CUSTOMER: number;I_BD_ADDR_ID: number;I_CUST_TYPE_ID_CHANGE: number;I_BG_ADDR_FLAG: number;I_CVI_STATUS_ID: number
}

export interface UPDATE_CONTRACT_OUTPUT {
  O_RESULT: number;O_RESULT: number;O_ERR_MSG: string
}

export function UPDATE_CONTRACT(input:UPDATE_CONTRACT_INPUT): PlSqlData {
  const sql = "CALL INV_CLIENT.UPDATE_CONTRACT(:I_CLNT_ID,:I_APP_USER_ID,:I_CNTR_NUM,:I_CUSTOMER_ID,:I_DLR_ID,:I_SIGN_DATE,:I_NAME,:I_CLNT_ID,:I_ADDR_INDEX,:I_CLNT_OPT_DATA,:I_ADDR_CITY,:I_SUBS_ID,:I_ADDR_STREET,:I_SUBS_OPT_DATA,:I_ADDR_HOUSE,:O_RESULT,:I_ADDR_COMMENT,:I_ADDR_NAME,:I_LOC_CITY,:I_LOC_STREET,:I_LOC_HOUSE,:I_LOC_INDEX,:I_DG_ID,:I_BDT_ID,:I_CNTR_PHONE,:I_PASPORT,:I_INN,:I_SIGN,:I_CONTACT_FACE,:I_MIN_INVOICE_SUM,:I_TRRC,:I_GNDR_ID,:I_DATE_OF_BIRTH,:I_TARGET_DATE,:I_COMMIT,:I_CHANGE_DLR,:O_RESULT,:O_ERR_MSG,:I_CHANGE_ORDER,:I_CHARGE_CHANGE_ORDER,:I_FROM_INV_CUSTOMER,:I_BD_ADDR_ID,:I_CUST_TYPE_ID_CHANGE,:I_BG_ADDR_FLAG,:I_CVI_STATUS_ID)";
  const binds: BindParameters = I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CNTR_NUM:{type: STRING,dir: BIND_IN,val: input.I_CNTR_NUM,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_DLR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DLR_ID,},I_SIGN_DATE:{type: DATE,dir: BIND_IN,val: input.I_SIGN_DATE,},I_NAME:{type: STRING,dir: BIND_IN,val: input.I_NAME,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_ADDR_INDEX:{type: STRING,dir: BIND_IN,val: input.I_ADDR_INDEX,},I_CLNT_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_IN,val: input.I_CLNT_OPT_DATA,},I_ADDR_CITY:{type: STRING,dir: BIND_IN,val: input.I_ADDR_CITY,},I_SUBS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_SUBS_ID,},I_ADDR_STREET:{type: STRING,dir: BIND_IN,val: input.I_ADDR_STREET,},I_SUBS_OPT_DATA:{type: "T_WD_OPT_DATA_TAB",dir: BIND_IN,val: input.I_SUBS_OPT_DATA,},I_ADDR_HOUSE:{type: STRING,dir: BIND_IN,val: input.I_ADDR_HOUSE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},I_ADDR_COMMENT:{type: STRING,dir: BIND_IN,val: input.I_ADDR_COMMENT,},I_ADDR_NAME:{type: STRING,dir: BIND_IN,val: input.I_ADDR_NAME,},I_LOC_CITY:{type: STRING,dir: BIND_IN,val: input.I_LOC_CITY,},I_LOC_STREET:{type: STRING,dir: BIND_IN,val: input.I_LOC_STREET,},I_LOC_HOUSE:{type: STRING,dir: BIND_IN,val: input.I_LOC_HOUSE,},I_LOC_INDEX:{type: STRING,dir: BIND_IN,val: input.I_LOC_INDEX,},I_DG_ID:{type: NUMBER,dir: BIND_IN,val: input.I_DG_ID,},I_BDT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BDT_ID,},I_CNTR_PHONE:{type: STRING,dir: BIND_IN,val: input.I_CNTR_PHONE,},I_PASPORT:{type: STRING,dir: BIND_IN,val: input.I_PASPORT,},I_INN:{type: STRING,dir: BIND_IN,val: input.I_INN,},I_SIGN:{type: DATE,dir: BIND_IN,val: input.I_SIGN,},I_CONTACT_FACE:{type: STRING,dir: BIND_IN,val: input.I_CONTACT_FACE,},I_MIN_INVOICE_SUM:{type: NUMBER,dir: BIND_IN,val: input.I_MIN_INVOICE_SUM,},I_TRRC:{type: STRING,dir: BIND_IN,val: input.I_TRRC,},I_GNDR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_GNDR_ID,},I_DATE_OF_BIRTH:{type: DATE,dir: BIND_IN,val: input.I_DATE_OF_BIRTH,},I_TARGET_DATE:{type: DATE,dir: BIND_IN,val: input.I_TARGET_DATE,},I_COMMIT:{type: NUMBER,dir: BIND_IN,val: input.I_COMMIT,},I_CHANGE_DLR:{type: NUMBER,dir: BIND_IN,val: input.I_CHANGE_DLR,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,},I_CHANGE_ORDER:{type: NUMBER,dir: BIND_IN,val: input.I_CHANGE_ORDER,},I_CHARGE_CHANGE_ORDER:{type: NUMBER,dir: BIND_IN,val: input.I_CHARGE_CHANGE_ORDER,},I_FROM_INV_CUSTOMER:{type: NUMBER,dir: BIND_IN,val: input.I_FROM_INV_CUSTOMER,},I_BD_ADDR_ID:{type: NUMBER,dir: BIND_IN,val: input.I_BD_ADDR_ID,},I_CUST_TYPE_ID_CHANGE:{type: NUMBER,dir: BIND_IN,val: input.I_CUST_TYPE_ID_CHANGE,},I_BG_ADDR_FLAG:{type: NUMBER,dir: BIND_IN,val: input.I_BG_ADDR_FLAG,},I_CVI_STATUS_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CVI_STATUS_ID,};

  return { binds, sql };
}

export interface UPDATE_CUST_ADDR_INPUT {
  I_APP_USER_ID: number;I_CUSTOMER_ID: number;I_CLNT_ID: number;I_ADDR_TYPE_ID: number;I_CUST_ADDR_DET_TAB: T_WD_CUST_ADDR_DET_TAB
}

export interface UPDATE_CUST_ADDR_OUTPUT {
  O_RESULT: number
}

export function UPDATE_CUST_ADDR(input:UPDATE_CUST_ADDR_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.UPDATE_CUST_ADDR(:I_APP_USER_ID,:I_CUSTOMER_ID,:I_CLNT_ID,:I_ADDR_TYPE_ID,:I_CUST_ADDR_DET_TAB,:O_RESULT)";
  const binds: BindParameters = I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CLNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CLNT_ID,},I_ADDR_TYPE_ID:{type: NUMBER,dir: BIND_IN,val: input.I_ADDR_TYPE_ID,},I_CUST_ADDR_DET_TAB:{type: "T_WD_CUST_ADDR_DET_TAB",dir: BIND_IN,val: input.I_CUST_ADDR_DET_TAB,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}

export interface UPDATE_CUST_IDDOC_INPUT {
  I_CID_ID: number;I_CID_ID: number;I_CID_ID: number;I_APP_USER_ID: number;I_IDDOC_ID: number;I_IDDOC_ID: number;I_IDDOC_ID: number;I_CUSTOMER_ID: number;I_ID_COUNTRY: number;I_ID_COUNTRY: number;I_ID_COUNTRY: number;I_CID_TAB: T_WD_CID_TAB;I_ID_SERIES: string;I_ID_SERIES: string;I_ID_SERIES: string;I_ID_NUMBER: string;I_ID_NUMBER: string;I_ID_NUMBER: string;I_ID_DATE_OF_ISSUE: OracleDate;I_ID_DATE_OF_ISSUE: OracleDate;I_ID_DATE_OF_ISSUE: OracleDate;I_ID_AUTHORITY: string;I_ID_AUTHORITY: string;I_ID_AUTHORITY: string;I_ID_HOLDER_NAME: string;I_ID_HOLDER_NAME: string;I_ID_HOLDER_NAME: string;I_ID_ALTERNATIVE: string;I_ID_ALTERNATIVE: string;I_ID_ALTERNATIVE: string;I_ID_MAIN: number;I_ID_MAIN: number;I_ID_MAIN: number;I_CRE_USER_ID: number;I_CRE_USER_ID: number;I_CRE_USER_ID: number;I_TARGET_DATE: OracleDate;I_TARGET_DATE: OracleDate;I_TARGET_DATE: OracleDate;I_COMMIT: BINARY_INTEGER;I_COMMIT: BINARY_INTEGER;I_COMMIT: BINARY_INTEGER;I_FROM_INV_CLIENT: number;I_FROM_INV_CLIENT: number;I_OWNER_CID_ID: number;I_CUST_IDDOC_OPT_FIELD: T_IDDOC_OPT_FIELD_TBL;I_RECREATE: number
}

export interface UPDATE_CUST_IDDOC_OUTPUT {
  O_CID_ID: number;O_RESULT: number;O_RESULT: number;O_RESULT: number;O_RESULT: number;O_ERR_MSG: string;O_ERR_MSG: string;O_ERR_MSG: string
}

export function UPDATE_CUST_IDDOC(input:UPDATE_CUST_IDDOC_INPUT): PlSqlData {
  const sql = "CALL INV_CUSTOMER.UPDATE_CUST_IDDOC(:I_CID_ID,:I_CID_ID,:I_CID_ID,:I_APP_USER_ID,:I_IDDOC_ID,:I_IDDOC_ID,:I_IDDOC_ID,:I_CUSTOMER_ID,:I_ID_COUNTRY,:I_ID_COUNTRY,:I_ID_COUNTRY,:I_CID_TAB,:I_ID_SERIES,:I_ID_SERIES,:I_ID_SERIES,:O_CID_ID,:I_ID_NUMBER,:I_ID_NUMBER,:I_ID_NUMBER,:O_RESULT,:I_ID_DATE_OF_ISSUE,:I_ID_DATE_OF_ISSUE,:I_ID_DATE_OF_ISSUE,:I_ID_AUTHORITY,:I_ID_AUTHORITY,:I_ID_AUTHORITY,:I_ID_HOLDER_NAME,:I_ID_HOLDER_NAME,:I_ID_HOLDER_NAME,:I_ID_ALTERNATIVE,:I_ID_ALTERNATIVE,:I_ID_ALTERNATIVE,:I_ID_MAIN,:I_ID_MAIN,:I_ID_MAIN,:I_CRE_USER_ID,:I_CRE_USER_ID,:I_CRE_USER_ID,:I_TARGET_DATE,:I_TARGET_DATE,:I_TARGET_DATE,:I_COMMIT,:I_COMMIT,:I_COMMIT,:O_RESULT,:O_RESULT,:O_RESULT,:O_ERR_MSG,:O_ERR_MSG,:O_ERR_MSG,:I_FROM_INV_CLIENT,:I_FROM_INV_CLIENT,:I_OWNER_CID_ID,:I_CUST_IDDOC_OPT_FIELD,:I_RECREATE)";
  const binds: BindParameters = I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},I_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CID_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_IDDOC_ID:{type: NUMBER,dir: BIND_IN,val: input.I_IDDOC_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_ID_COUNTRY:{type: NUMBER,dir: BIND_IN,val: input.I_ID_COUNTRY,},I_ID_COUNTRY:{type: NUMBER,dir: BIND_IN,val: input.I_ID_COUNTRY,},I_ID_COUNTRY:{type: NUMBER,dir: BIND_IN,val: input.I_ID_COUNTRY,},I_CID_TAB:{type: "T_WD_CID_TAB",dir: BIND_IN,val: input.I_CID_TAB,},I_ID_SERIES:{type: STRING,dir: BIND_IN,val: input.I_ID_SERIES,},I_ID_SERIES:{type: STRING,dir: BIND_IN,val: input.I_ID_SERIES,},I_ID_SERIES:{type: STRING,dir: BIND_IN,val: input.I_ID_SERIES,},O_CID_ID:{type: NUMBER,dir: BIND_OUT,},I_ID_NUMBER:{type: STRING,dir: BIND_IN,val: input.I_ID_NUMBER,},I_ID_NUMBER:{type: STRING,dir: BIND_IN,val: input.I_ID_NUMBER,},I_ID_NUMBER:{type: STRING,dir: BIND_IN,val: input.I_ID_NUMBER,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},I_ID_DATE_OF_ISSUE:{type: DATE,dir: BIND_IN,val: input.I_ID_DATE_OF_ISSUE,},I_ID_DATE_OF_ISSUE:{type: DATE,dir: BIND_IN,val: input.I_ID_DATE_OF_ISSUE,},I_ID_DATE_OF_ISSUE:{type: DATE,dir: BIND_IN,val: input.I_ID_DATE_OF_ISSUE,},I_ID_AUTHORITY:{type: STRING,dir: BIND_IN,val: input.I_ID_AUTHORITY,},I_ID_AUTHORITY:{type: STRING,dir: BIND_IN,val: input.I_ID_AUTHORITY,},I_ID_AUTHORITY:{type: STRING,dir: BIND_IN,val: input.I_ID_AUTHORITY,},I_ID_HOLDER_NAME:{type: STRING,dir: BIND_IN,val: input.I_ID_HOLDER_NAME,},I_ID_HOLDER_NAME:{type: STRING,dir: BIND_IN,val: input.I_ID_HOLDER_NAME,},I_ID_HOLDER_NAME:{type: STRING,dir: BIND_IN,val: input.I_ID_HOLDER_NAME,},I_ID_ALTERNATIVE:{type: STRING,dir: BIND_IN,val: input.I_ID_ALTERNATIVE,},I_ID_ALTERNATIVE:{type: STRING,dir: BIND_IN,val: input.I_ID_ALTERNATIVE,},I_ID_ALTERNATIVE:{type: STRING,dir: BIND_IN,val: input.I_ID_ALTERNATIVE,},I_ID_MAIN:{type: NUMBER,dir: BIND_IN,val: input.I_ID_MAIN,},I_ID_MAIN:{type: NUMBER,dir: BIND_IN,val: input.I_ID_MAIN,},I_ID_MAIN:{type: NUMBER,dir: BIND_IN,val: input.I_ID_MAIN,},I_CRE_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CRE_USER_ID,},I_CRE_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CRE_USER_ID,},I_CRE_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CRE_USER_ID,},I_TARGET_DATE:{type: DATE,dir: BIND_IN,val: input.I_TARGET_DATE,},I_TARGET_DATE:{type: DATE,dir: BIND_IN,val: input.I_TARGET_DATE,},I_TARGET_DATE:{type: DATE,dir: BIND_IN,val: input.I_TARGET_DATE,},I_COMMIT:{type: BINARY_INTEGER,dir: BIND_IN,val: input.I_COMMIT,},I_COMMIT:{type: BINARY_INTEGER,dir: BIND_IN,val: input.I_COMMIT,},I_COMMIT:{type: BINARY_INTEGER,dir: BIND_IN,val: input.I_COMMIT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,},I_FROM_INV_CLIENT:{type: NUMBER,dir: BIND_IN,val: input.I_FROM_INV_CLIENT,},I_FROM_INV_CLIENT:{type: NUMBER,dir: BIND_IN,val: input.I_FROM_INV_CLIENT,},I_OWNER_CID_ID:{type: NUMBER,dir: BIND_IN,val: input.I_OWNER_CID_ID,},I_CUST_IDDOC_OPT_FIELD:{type: "T_IDDOC_OPT_FIELD_TBL",dir: BIND_IN,val: input.I_CUST_IDDOC_OPT_FIELD,},I_RECREATE:{type: NUMBER,dir: BIND_IN,val: input.I_RECREATE,};

  return { binds, sql };
}

export interface UPDATE_CUST_NAME_INPUT {
  I_CUSTOMER_ID: number;I_APP_USER_ID: number;I_CNT_ID: number;I_CUSTOMER_ID: number;I_CN_DICT_CODE: string;I_CUST_NAME_TAB: T_WD_CUST_NAME_TAB;I_CN_VALUE: string;I_LANG_ID: number;I_CRE_USER_ID: number;I_TARGET_DATE: OracleDate;I_COMMIT: BINARY_INTEGER;I_FROM_INV_CLIENT: number
}

export interface UPDATE_CUST_NAME_OUTPUT {
  O_RESULT: number;O_RESULT: number;O_ERR_MSG: string
}

export function UPDATE_CUST_NAME(input:UPDATE_CUST_NAME_INPUT): PlSqlData {
  const sql = "CALL INV_CUSTOMER.UPDATE_CUST_NAME(:I_CUSTOMER_ID,:I_APP_USER_ID,:I_CNT_ID,:I_CUSTOMER_ID,:I_CN_DICT_CODE,:I_CUST_NAME_TAB,:I_CN_VALUE,:O_RESULT,:I_LANG_ID,:I_CRE_USER_ID,:I_TARGET_DATE,:I_COMMIT,:O_RESULT,:O_ERR_MSG,:I_FROM_INV_CLIENT)";
  const binds: BindParameters = I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_APP_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_APP_USER_ID,},I_CNT_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CNT_ID,},I_CUSTOMER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CUSTOMER_ID,},I_CN_DICT_CODE:{type: STRING,dir: BIND_IN,val: input.I_CN_DICT_CODE,},I_CUST_NAME_TAB:{type: "T_WD_CUST_NAME_TAB",dir: BIND_IN,val: input.I_CUST_NAME_TAB,},I_CN_VALUE:{type: STRING,dir: BIND_IN,val: input.I_CN_VALUE,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},I_LANG_ID:{type: NUMBER,dir: BIND_IN,val: input.I_LANG_ID,},I_CRE_USER_ID:{type: NUMBER,dir: BIND_IN,val: input.I_CRE_USER_ID,},I_TARGET_DATE:{type: DATE,dir: BIND_IN,val: input.I_TARGET_DATE,},I_COMMIT:{type: BINARY_INTEGER,dir: BIND_IN,val: input.I_COMMIT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,},O_ERR_MSG:{type: STRING,dir: BIND_OUT,},I_FROM_INV_CLIENT:{type: NUMBER,dir: BIND_IN,val: input.I_FROM_INV_CLIENT,};

  return { binds, sql };
}

export interface USER_AUTHENTICATION_INPUT {
  I_LOGIN: string;I_PASSWORD: string
}

export interface USER_AUTHENTICATION_OUTPUT {
  O_USER_ID: number;O_RESULT: number
}

export function USER_AUTHENTICATION(input:USER_AUTHENTICATION_INPUT): PlSqlData {
  const sql = "CALL WD_CORE.USER_AUTHENTICATION(:I_LOGIN,:I_PASSWORD,:O_USER_ID,:O_RESULT)";
  const binds: BindParameters = I_LOGIN:{type: STRING,dir: BIND_IN,val: input.I_LOGIN,},I_PASSWORD:{type: STRING,dir: BIND_IN,val: input.I_PASSWORD,},O_USER_ID:{type: NUMBER,dir: BIND_OUT,},O_RESULT:{type: NUMBER,dir: BIND_OUT,};

  return { binds, sql };
}
