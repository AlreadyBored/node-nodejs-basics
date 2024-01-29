import path, { dirname } from "path";
import { release, version } from "os";
import { createServer } from "http";
import hello from "./files/c.js";
import { createRequire } from "node:module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);

const objA = require("./files/a.json");
const objB = require("./files/b.json");
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = objA;
} else {
  unknownObject = objB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default { unknownObject, myServer };
