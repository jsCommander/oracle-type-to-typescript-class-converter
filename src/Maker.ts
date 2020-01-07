import * as fs from "fs";
import {
  ProcedureParam,
  TypeAttr,
  Procedure,
  CollectionType,
  PackageType,
  SchemaType,
  SchemaTypeInfo,
  PackageTypeInfo,
  SchemaCollectionTypeInfo,
  PackageCollectionTypeInfo,
  ProcedureMetaData,
  ProcedureInfo,
  SchemaTypesMetaData,
  TypeInfo,
  Types
} from "./interfaces";
import {
  baseTemplate,
  emunTemplate,
  functionTemplate,
  classTemplate
} from "./templates";

export class Maker {
  private readonly baseTemplate = baseTemplate;
  private readonly emunTemplate = emunTemplate;
  private readonly classTemplate = classTemplate;
  private readonly functionTemplate = functionTemplate;

  constructor() {}

  getBase() {
    return this.baseTemplate;
  }

  makePackageTypesEnum(name: string, types: PackageType[]) {
    const fields: string[] = [];
    for (const type of types) {
      if (type.TYPE_NAME) {
        const field = `${type.TYPE_NAME}="${type.PACKAGE_NAME}.${type.TYPE_NAME}"`;
        fields.push(field);
      }
    }

    let enumText = this.emunTemplate;
    enumText = enumText.replace("{{name}}", name);
    enumText = enumText.replace("{{fields}}", fields.join(","));

    console.log(`maker: create package "${name}" types enum`);
    return enumText;
  }

  makeSchemaTypesEnum(name: string, types: SchemaType[]) {
    const fields: string[] = [];
    for (const type of types) {
      if (type.TYPE_NAME) {
        const field = `${type.TYPE_NAME}="${type.OWNER}.${type.TYPE_NAME}"`;
        fields.push(field);
      }
    }

    let enumText = this.emunTemplate;
    enumText = enumText.replace("{{name}}", name);
    enumText = enumText.replace("{{fields}}", fields.join(","));

    console.log(`maker: create schema "${name}" types enum`);
    return enumText;
  }

  makeProcsEnum(name: string, types: Procedure[]) {
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

    console.log("maker: create procedures enum");
    return enumText;
  }

  makeTypeClass(
    type: SchemaTypeInfo | PackageTypeInfo,
    schemas: SchemaTypesMetaData
  ) {
    const fields: string[] = [];
    const name = type.typeInfo.TYPE_NAME;
    for (const attr of type.attrs) {
      let jsType = this.oracleTypeToTsType(attr.ATTR_TYPE_NAME);
      let swaggerInfo = "@ApiProperty()";
      if (attr.ATTR_TYPE_OWNER) {
        const schema = schemas[attr.ATTR_TYPE_OWNER];
        let typeInfo: TypeInfo;
        if (attr.ATTR_TYPE_PACKAGE) {
          typeInfo =
            schema.packages[attr.ATTR_TYPE_PACKAGE].types[attr.ATTR_TYPE_NAME];
        } else {
          typeInfo = schema.types[attr.ATTR_TYPE_NAME];
        }
        if (
          typeInfo.type === Types.PACKAGE_COLLECTION_TYPE ||
          typeInfo.type === Types.SCHEMA_COLLECTION_TYPE
        ) {
          jsType =
            this.oracleTypeToTsType(typeInfo.collectionInfo.ELEM_TYPE_NAME) +
            "[]";
          const swaggerType = this.oracleTypeToSwaggerType(
            typeInfo.collectionInfo.ELEM_TYPE_NAME
          );
          swaggerInfo = `@ApiProperty( { type: [${swaggerType}] })`;
        }
      }

      const field = `${swaggerInfo} ${attr.ATTR_NAME}:${jsType};`;
      fields.push(field);
    }

    let typeInterface = this.classTemplate;
    typeInterface = typeInterface.replace("{{name}}", name);
    typeInterface = typeInterface.replace("{{fields}}", fields.join(""));

    console.log(`maker: create class for ${name}`);
    return typeInterface;
  }

  makeCollectionType(
    type: SchemaCollectionTypeInfo | PackageCollectionTypeInfo
  ) {
    const name = type.typeInfo.TYPE_NAME;
    const jsType = this.oracleTypeToTsType(type.collectionInfo.ELEM_TYPE_NAME);
    const typeInterface = `export type ${name} = ${jsType}[];`;

    console.log(`maker: create class for ${name}`);
    return typeInterface;
  }

  makeFunction(schemas: SchemaTypesMetaData, procedureInfo: ProcedureInfo) {
    const params = procedureInfo.paramsInfo;
    const { PACKAGE_NAME, OBJECT_NAME } = params[0];

    const functionName = OBJECT_NAME;
    const inputClassName = `${OBJECT_NAME}_INPUT`;

    const sqlParam: string[] = [];
    const bindsParams: string[] = [];

    for (const param of params) {
      if (param.ARGUMENT_NAME && param.DATA_LEVEL === 0) {
        sqlParam.push(`:${param.ARGUMENT_NAME}`);
        bindsParams.push(this.makeBindParam(param));
      }
    }

    let paramStr = this.makeFunctionParamClass(schemas, procedureInfo);

    let functionStr = this.functionTemplate;
    functionStr = functionStr.replace("{{name}}", functionName);
    functionStr = functionStr.replace("{{input_type}}", inputClassName);
    functionStr = functionStr.replace(
      "{{sql}}",
      `"CALL ${PACKAGE_NAME}.${OBJECT_NAME}(${sqlParam.join(",")})"`
    );
    functionStr = functionStr.replace("{{binds}}", bindsParams.join(","));

    return paramStr + functionStr;
  }

  private makeFunctionParamClass(
    schemas: SchemaTypesMetaData,
    procedureInfo: ProcedureInfo
  ) {
    const params = procedureInfo.paramsInfo;
    const { OBJECT_NAME } = procedureInfo.paramsInfo[0];
    const inputClassName = `${OBJECT_NAME}_INPUT`;
    const outputClassName = `${OBJECT_NAME}_OUTPUT`;
    const inputParams: string[] = [];
    const outputParams: string[] = [];

    for (const param of params) {
      if (param.ARGUMENT_NAME && param.DATA_LEVEL === 0) {
        let jsType = this.getProcParamType(param);
        const isDefault = param.DEFAULTED === "Y";
        let swaggerInfo = isDefault
          ? "@ApiPropertyOptional()"
          : "@ApiProperty()";

        if (param.TYPE_OWNER) {
          const owner =
            param.TYPE_OWNER === "PUBLIC" ? "SMASTER" : param.TYPE_OWNER;
          const schema = schemas[owner];
          let typeInfo: TypeInfo;
          if (param.TYPE_SUBNAME) {
            typeInfo =
              schema.packages[param.TYPE_NAME].types[param.TYPE_SUBNAME];
          } else {
            typeInfo = schema.types[param.TYPE_NAME];
          }
          if (
            typeInfo.type === Types.PACKAGE_COLLECTION_TYPE ||
            typeInfo.type === Types.SCHEMA_COLLECTION_TYPE
          ) {
            const swaggerType = this.oracleTypeToSwaggerType(
              typeInfo.collectionInfo.ELEM_TYPE_NAME
            );
            jsType =
              this.oracleTypeToTsType(typeInfo.collectionInfo.ELEM_TYPE_NAME) +
              "[]";
            swaggerInfo = isDefault
              ? `@ApiPropertyOptional( { type: [${swaggerType}] })`
              : `@ApiProperty( { type: [${swaggerType}] })`;
          }
        }

        const def = isDefault ? "?" : "";
        const paramStr = `${swaggerInfo} ${param.ARGUMENT_NAME}${def}: ${jsType}`;

        if (param.IN_OUT === "IN") {
          inputParams.push(paramStr);
        } else if (param.IN_OUT === "OUT") {
          outputParams.push(paramStr);
        }
      }
    }

    let inputClass = this.classTemplate;
    inputClass = inputClass.replace("{{name}}", inputClassName);
    inputClass = inputClass.replace("{{fields}}", inputParams.join(";"));

    let outputClass = this.classTemplate;
    outputClass = outputClass.replace("{{name}}", outputClassName);
    outputClass = outputClass.replace("{{fields}}", outputParams.join(";"));

    return inputClass + outputClass;
  }

  private makeBindParam(param: ProcedureParam) {
    const name = param.ARGUMENT_NAME;
    const dir = `BIND_${param.IN_OUT}`;

    let type: string;
    if (param.TYPE_SUBNAME) {
      type = `"${param.TYPE_OWNER}.${param.TYPE_NAME}.${param.TYPE_SUBNAME}"`;
    } else if (param.TYPE_NAME) {
      type = `"${param.TYPE_OWNER}.${param.TYPE_NAME}"`;
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
      let val: string;

      if (param.DEFAULTED === "Y") {
        val = `val: input.${name} !== undefined ? input.${name} : null,`;
      } else {
        val = `val: input.${name},`;
      }
      text += val;
    }
    text += "}";
    return text;
  }

  private getProcParamType(param: ProcedureParam) {
    if (param.TYPE_SUBNAME) {
      return param.TYPE_SUBNAME;
    } else if (param.TYPE_NAME) {
      return param.TYPE_NAME;
    } else {
      return this.oracleTypeToTsType(param.DATA_TYPE);
    }
  }

  private oracleTypeToSwaggerType(oracleType: string) {
    if (oracleType === "NUMBER") {
      return "Number";
    }
    if (oracleType.includes("VARCHAR")) {
      return "String";
    }
    if (oracleType.includes("DATE")) {
      return "String";
    }

    return oracleType;
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

    return oracleType;
  }
}
