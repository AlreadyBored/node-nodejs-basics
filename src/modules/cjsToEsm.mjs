// !!! use node --experimental-json-modules cjsToEsm.mjs to run this code

// const path = require('path');
import path from "path";

// const { release, version } = require('os');
import { release, version } from "os";

// const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from "http";

// require('./files/c');
import "./files/c.js";
import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };

const random = Math.random();

let unknownObject;
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (random > 0.5) {
  // unknownObject = require("./files/a.json");
  unknownObject = a;
} else {
  // unknownObject = require("./files/b.json");
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

// module.exports = {
//     unknownObject,
//     createMyServer,
// };

export { unknownObject, createMyServer };
