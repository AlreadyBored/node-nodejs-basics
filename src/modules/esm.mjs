import fs from "fs";
import path from "node:path";
import { release, version } from "node:os";
import { createServer } from "node:http";
import "./files/c.js";

const parsedData = (path) =>
  JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

const random = Math.random();

const unknownObject = parsedData(
  random > 0.5 ? "./files/a.json" : "./files/b.json"
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
