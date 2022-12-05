import path from "path";
import fs from "fs/promises";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import "./files/c.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = path.resolve(__dirname, "cjsToEsm.mjs");
const a = JSON.parse(
  await fs.readFile(new URL("./files/a.json", import.meta.url))
);
const b = JSON.parse(
  await fs.readFile(new URL("./files/b.json", import.meta.url))
);
console.log(a, b);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = a;
} else {
  unknownObject = b;
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
