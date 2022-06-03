import path from "path";
import { fileURLToPath } from "url";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import fileA from "./files/a.json" assert { type: "json" };
import fileB from "./files/b.json" assert { type: "json" };
const fileC = import("./files/c.js").then((module) => {
  module;
});

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let unknownObject;
if (random > 0.5) {
  unknownObject = fileA;
} else {
  unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});