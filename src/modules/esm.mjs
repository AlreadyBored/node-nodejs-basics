import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import * as fileC from "./files/c.js";

import { readFile } from "fs/promises";

const random = Math.random();

let unknownObject;

const readJsonFile = async (filePath) => {
  const data = await readFile(filePath, "utf-8");
  return JSON.parse(data);
};

if (random > 0.5) {
  unknownObject = await readJsonFile("./files/a.json");
} else {
  unknownObject = await readJsonFile("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filePath = new URL(import.meta.url).pathname;

console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${process.cwd()}`);

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
