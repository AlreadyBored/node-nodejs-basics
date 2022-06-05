import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import url from "url";
import "./files/c.js";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = import("./files/a.json");
} else {
  unknownObject = import("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);

console.log(
  `Path to current directory is ${url.fileURLToPath(new URL(import.meta.url))}`
);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
