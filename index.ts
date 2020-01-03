import { TypeParser } from "./src/TypeParser";

const parser = new TypeParser("192.168.17.171/t4531web", "WD4", "wd4");

parser.parse("WD_CORE", "oracleProcedures.ts");
