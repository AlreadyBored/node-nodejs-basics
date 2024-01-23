import path from "path";
import { release, version } from "os";
import { createServer } from "http";
import "./files/c.js";
import { promises as fsPromises } from "fs";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(await fsPromises.readFile("./files/a.json"));
} else {
  unknownObject = JSON.parse(await fsPromises.readFile("./files/b.json"));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

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
