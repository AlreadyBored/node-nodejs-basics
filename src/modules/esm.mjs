import path from "path";
import { release, version } from "os";
import { readFileSync } from "node:fs";
import { createServer } from "http";
import "./files/c.js";

const random = Math.random();

let unknownObject;
const readFileJson = (path) => {
  const url = new URL(path, import.meta.url);
  const jsonData = readFileSync(url, "utf-8");
  return JSON.parse(jsonData);
};
if (random > 0.5) {
  unknownObject = readFileJson("./files/a.json");
} else {
  unknownObject = readFileJson("./files/b.json");
}

console.log(`Release \u001B[34m${release()}\u001B[0m`);
console.log(`Version \u001B[34m${version()}\u001B[0m`);
console.log(`Path segment separator is \u001B[34m"${path.sep}"\u001B[0m`);

console.log(`Path to current file is \u001B[34m${import.meta.url}\u001B[0m`);
console.log(
  `Path to current directory \u001B[34mis ${path.dirname(
    import.meta.url
  )}\u001B[0m`
);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port \u001B[34m${PORT}\u001B[0m`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
