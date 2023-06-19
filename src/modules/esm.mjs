import { sep, dirname } from "node:path";
import { release, version } from "os";
import { fileURLToPath } from "url";
import { createServer as createServerHttp } from "http";
import "./files/c";
import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

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

module.exports = {
  unknownObject,
  myServer,
};