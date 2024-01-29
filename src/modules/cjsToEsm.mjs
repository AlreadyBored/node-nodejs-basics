import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const aJson = require("./files/a.json");
const bJson = require("./files/b.json");

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = aJson;
} else {
  unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(
  `Path to current directory is ${new URL(".", import.meta.url).pathname}`
);

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
