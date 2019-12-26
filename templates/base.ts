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
  BIND_INOUT,
  DATE,
  BindParameters
} from "oracledb";

export interface OracleProcedureData {
  sql: string;
  binds: BindParameters;
}
