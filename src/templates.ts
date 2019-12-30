export const baseTemplate = `

/*
 * Этот файл сгенерирован автоматически по мета-данным оракла
 */

import {
  NUMBER,
  STRING,
  BIND_IN,
  BIND_OUT,
  BIND_INOUT,
  DATE,
  BindParameters
} from "oracledb";

export interface OracleProcedureData {
  sql: string;
  binds: BindParameters;
}


`;

export const emunTemplate = `

export enum {{name}} {
  {{fields}}
}

`;

export const classTemplate = `

export class {{name}} {
  {{fields}}
}

`;

export const functionTemplate = `

export function {{name}}(input:{{input_type}}): OracleProcedureData {
  const sql = {{sql}};
  const binds: BindParameters = { {{binds}} };
  
  return { binds, sql };
}

`;
