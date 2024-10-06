import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import Module from "module";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = Module.createRequire(import.meta.url);

import "./files/c.js";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  //experimental feature
  // unknownObject = await import("./files/a.json", { with: { type: "json" } });
  unknownObject = require(path.join(__dirname, "files", "a.json"));
} else {
  unknownObject = require(path.join(__dirname, "files", "b.json"));
  //experimental feature
  // unknownObject = await import("./files/a.json", { with: { type: "json" } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

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
