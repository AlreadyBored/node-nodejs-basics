import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(__filename);

let unknownObject;

random > 0.5
  ? (unknownObject = require())
  : (unknownObject = require("./files/b.json"));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
