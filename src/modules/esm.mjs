import path from 'node:path';
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';


const require = createRequire(import.meta.url);

import './files/c.js';
const aJSON = require('./files/a.json');
const bJSON = require('./files/b.json');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = aJSON;
} else {
    unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 4000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

