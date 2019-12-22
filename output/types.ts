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

export interface PlsqlData {
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