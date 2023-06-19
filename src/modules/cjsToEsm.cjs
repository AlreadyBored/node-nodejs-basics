import path from "path";
import { release, version } from "os";
import {fileURLToPath } from "url";
import {createServer as createServerHttp} from "http";

import "./files/c.js";
import { createRequire } from "module";

const random = Math.random();

let unknownObject;

const require = createRequire(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (random > 0.5) {
    unknownObject = require("./files/a.json");
    
}else {
    unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {unknownObject, myServer}
