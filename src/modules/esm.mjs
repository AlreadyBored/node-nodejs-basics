import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp  } from "http";
import "./files/c.js";

import * as url from 'url';
import { createRequire } from 'node:module';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const require = createRequire(import.meta.url); //ATTENTION! Create custom require

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require("./files/a.json"); //ATTENTION! The require was implemented above with node module! It is acceptable!
} 
else {
    unknownObject = require("./files/b.json"); //ATTENTION! The require was implemented above with node module! It is acceptable!
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

export {
    unknownObject,
    myServer,
}

