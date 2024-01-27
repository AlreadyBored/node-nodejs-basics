import path from "path";
import os from "os";
import http from "http";
import "./files/c.js";
import aData from "./files/a.json" with {type:'json'}
import bData from "./files/b.json"with {type:'json'}

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = aData;
} else {
  unknownObject = bData;
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

export const myServer = http.createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
