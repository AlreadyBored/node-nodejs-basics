import path from "path";
import os from "os";
import { createServer as createServerHttp } from "http";

import "./files/c.js";

const random = Math.random();

//--------------------

import { createRequire } from "module"; //const { createRequire } = require('module');

const require = createRequire(import.meta.url); // construct the require method
const my_json_fileA = require("./files/a.json"); // use the require method
const my_json_fileB = require("./files/b.json"); // use the require method

let unknownObject = random > 0.5 ? my_json_fileA : my_json_fileB;

//--------------------

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

//--------------------

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

//--------------------

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
