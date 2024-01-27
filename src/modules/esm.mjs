import path from "path";
import os from "os";
import http from "http";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";
import "./files/c.js";

const random = Math.random();
const filename = fileURLToPath(import.meta.url);

let unknownObject;

const loadJsonFile = async (filepath) => {
  const jsonData = readFileSync(filepath, "utf-8");
  return JSON.parse(jsonData);
};

if (random > 0.5) {
  unknownObject = loadJsonFile(path.join(path.dirname(filename), "files", "a.json"));
} else {
  unknownObject = loadJsonFile(path.join(path.dirname(filename), "files", "b.json"));
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${path.dirname(filename)}`);

const myServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
