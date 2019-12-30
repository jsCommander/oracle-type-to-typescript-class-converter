import { TypeParser, ParseOptions } from "./src/TypeParser";

const parser = new TypeParser("192.168.17.171/t4531web", "WD4", "wd4");

const options: ParseOptions = {
  schemaTypes: ["WD4", "SMASTER"],
  packageTypes: ["WD_CORE"],
  packageProcedures: ["WD_CORE"]
};

parser.parse(options, "oracleProcedures.ts");
