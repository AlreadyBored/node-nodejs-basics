import { sep } from "path";
import { release, version } from "os";
import { createRequire } from "module";
import { createServer } from "http";
import { consoleLog } from "./files/c.js";
import { cwd } from "process";

consoleLog();
const require = createRequire(import.meta.url);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${cwd()}`);

const createMyServer = createServer((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
