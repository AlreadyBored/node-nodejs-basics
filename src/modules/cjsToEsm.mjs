import * as path from "node:path";
import {fileURLToPath} from "url";
import { release, version } from "os";
import { createServer as createServerHttp} from "http";
import "./files/c.js";

import { createRequire } from "node:module"; 
const require = createRequire(import.meta.url);


const random = Math.random();

let unknownObject;

if (random > 0.5) {

  unknownObject = require('./files/a.json');
} else {

unknownObject = require('./files/b.json');

}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

createMyServer.listen(8000)

console.log("unknownObject: ", unknownObject);




