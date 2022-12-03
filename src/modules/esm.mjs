import path from "path";
import {fileURLToPath} from "url";
import { release, version } from "os";
import {createServer as createServerHttp} from "http";
import fs from "fs/promises";
import {} from "./files/c.js";

const __filename = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__filename);
const a = "a.json";
const b = "b.json";
const fileA = path.join(__dirName, "files", a);
const fileB = path.join(__dirName, "files", b)
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = await fs.readFile(fileA, {encoding: "utf-8"}).then(json => JSON.parse(json));
} else {
    unknownObject = await fs.readFile(fileB, {encoding: "utf-8"}).then(json => JSON.parse(json));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirName}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {unknownObject, myServer}

