import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { createRequire } from "module";
import "./files/c.js";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const jsonA = require("./files/a.json");
const jsonB = require("./files/b.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const unknownObject = Math.random() > 0.5 ? jsonA : jsonB;

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
