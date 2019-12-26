import * as fs from "fs";
import {
  OracleTypeInfo,
  OracleProcParams,
  OracleTypeAttrInfo,
  OracleProcInfo,
  OracleCollectionTypeInfo
} from "./interfaces";

export interface ParserConfig {
  baseTemplateFile: string;
  emunTemplateFile: string;
  interfaceTemplateFile: string;
  functionTemplateFile: string;
}

export class TypeParser {
  private readonly baseTemplate: string;
  private readonly emunTemplate: string;
  private readonly interfaceTemplate: string;
  private readonly functionTemplate: string;

  constructor(config: ParserConfig) {
    this.baseTemplate = fs.readFileSync(config.baseTemplateFile, "utf8");
    this.emunTemplate = fs.readFileSync(config.emunTemplateFile, "utf8");
    this.interfaceTemplate = fs.readFileSync(
      config.interfaceTemplateFile,
      "utf8"
    );
    this.functionTemplate = fs.readFileSync(
      config.functionTemplateFile,
      "utf8"
    );
  }

  makeTypesEnum(name: string, types: OracleTypeInfo[]) {
    const fields: string[] = [];
    for (const type of types) {
      if (type.TYPE_NAME) {
        const field = `${type.TYPE_NAME}="${type.TYPE_NAME}"`;
        fields.push(field);
      }
    }

    let enumText = this.emunTemplate;
    enumText = enumText.replace("{{name}}", name);
    enumText = enumText.replace("{{fields}}", fields.join(","));

    return enumText;
  }

  makeProcsEnum(name: string, types: OracleProcInfo[]) {
    const fields: string[] = [];
    for (const type of types) {
      if (type.PROCEDURE_NAME) {
        const field = `${type.PROCEDURE_NAME}="${type.PROCEDURE_NAME}"`;
        fields.push(field);
      }
    }

    let enumText = this.emunTemplate;
    enumText = enumText.replace("{{name}}", name);
    enumText = enumText.replace("{{fields}}", fields.join(","));

    return enumText;
  }

  makeRecordInterface(typeInfo: OracleTypeAttrInfo[]) {
    const name = typeInfo[0].TYPE_NAME;
    const fields: string[] = [];
    for (const type of typeInfo) {
      const jsType = this.oracleTypeToTsType(type.ATTR_TYPE_NAME);
      const swaggerInfo = "@ApiProperty()";
      const field = `${swaggerInfo} ${type.ATTR_NAME}:${jsType};`;
      fields.push(field);
    }

    let typeInterface = this.interfaceTemplate;
    typeInterface = typeInterface.replace("{{name}}", name);
    typeInterface = typeInterface.replace("{{fields}}", fields.join(""));
    return typeInterface;
  }

  makeCollectionType(type: OracleCollectionTypeInfo) {
    const jsType = this.oracleTypeToTsType(type.ELEM_TYPE_NAME);
    return `\nexport type ${type.TYPE_NAME} = ${jsType}[];\n`;
  }

  makeFunction(procParams: OracleProcParams[]) {
    const sorted = procParams.sort((a, b) => a.POSITION - b.POSITION);
    const { PACKAGE_NAME, OBJECT_NAME } = sorted[0];

    const functionName = OBJECT_NAME;
    const inputInterfaceName = `${OBJECT_NAME}_INPUT`;
    const outputInterfaceName = `${OBJECT_NAME}_OUTPUT`;

    const inputParams: string[] = [];
    const outputParams: string[] = [];

    const sqlParam: string[] = [];
    const bindsParams: string[] = [];

    for (const param of sorted) {
      if (param.ARGUMENT_NAME && param.DATA_LEVEL === 0) {
        sqlParam.push(`:${param.ARGUMENT_NAME}`);
        const jsType = this.getProcParamType(param);
        const def = param.DEFAULTED === "Y" ? "?" : "";

        if (param.IN_OUT === "IN") {
          const inputParam = `${param.ARGUMENT_NAME}${def}: ${jsType}`;
          inputParams.push(inputParam);
        } else if (param.IN_OUT === "OUT") {
          const outputParam = `${param.ARGUMENT_NAME}: ${jsType}`;
          outputParams.push(outputParam);
        }

        bindsParams.push(this.makeBindParam(param));
      }
    }

    let functionText = this.functionTemplate;
    functionText = functionText.replace("{{name}}", functionName);
    functionText = functionText.replace("{{input_type}}", inputInterfaceName);
    functionText = functionText.replace(
      "{{sql}}",
      `"CALL ${PACKAGE_NAME}.${OBJECT_NAME}(${sqlParam.join(",")})"`
    );
    functionText = functionText.replace("{{binds}}", bindsParams.join(","));

    let inputInterface = this.interfaceTemplate;
    inputInterface = inputInterface.replace("{{name}}", inputInterfaceName);
    inputInterface = inputInterface.replace(
      "{{fields}}",
      inputParams.join(";")
    );

    let outputInterface = this.interfaceTemplate;
    outputInterface = outputInterface.replace("{{name}}", outputInterfaceName);
    outputInterface = outputInterface.replace(
      "{{fields}}",
      outputParams.join(";")
    );

    return inputInterface + outputInterface + functionText;
  }

  private makeBindParam(param: OracleProcParams) {
    const name = param.ARGUMENT_NAME;
    const dir = `BIND_${param.IN_OUT}`;

    let type: string;
    if (param.TYPE_NAME === param.PACKAGE_NAME) {
      type = `"${param.TYPE_NAME}.${param.TYPE_SUBNAME}"`;
    } else if (param.TYPE_SUBNAME) {
      type = `"${param.TYPE_SUBNAME}"`;
    } else if (param.TYPE_NAME) {
      type = `"${param.TYPE_NAME}"`;
    } else {
      type = param.DATA_TYPE;
    }

    if (type === "VARCHAR" || type === "VARCHAR2") {
      type = "STRING";
    }

    let text = `${name}:{`;
    text += `type: ${type},`;
    text += `dir: ${dir},`;

    if (param.IN_OUT === "IN") {
      const def = param.DEFAULTED === "Y" ? " || null" : "";
      text += `val: input.${name}${def},`;
    }
    text += "}";
    return text;
  }

  private getProcParamType(param: OracleProcParams) {
    if (param.TYPE_SUBNAME) {
      return param.TYPE_SUBNAME;
    } else if (param.TYPE_NAME) {
      return param.TYPE_NAME;
    } else {
      return this.oracleTypeToTsType(param.DATA_TYPE);
    }
  }

  private oracleTypeToTsType(oracleType: string) {
    if (oracleType === "NUMBER") {
      return "number";
    }
    if (oracleType.includes("VARCHAR")) {
      return "string";
    }
    if (oracleType.includes("DATE")) {
      return "string";
    }

    return oracleType.toUpperCase();
  }
}
