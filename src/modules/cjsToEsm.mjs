import { sep } from "path";
import { readFileSync } from "fs";

import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import * as c from "./files/c.js";

const random = Math.random();

let unknownObject;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (random > 0.5) {
  const unknownObject = JSON.parse(readFileSync(__dirname + "/files/a.json"));
} else {
    const unknownObject = JSON.parse(readFileSync(__dirname + "/files/b.json"));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(
  `Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`
);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export default {
  unknownObject,
  createMyServer,
};
