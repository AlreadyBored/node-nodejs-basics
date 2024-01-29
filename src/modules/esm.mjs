import path from 'path';
import { fileURLToPath } from 'url';

import { release, version } from 'os';
import { createServer } from 'http';
import * as c from './files/c.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const random = Math.random();

export let unknownObject;
const dirName = path.dirname(fileURLToPath(import.meta.url));
const fileName = path.basename(fileURLToPath(import.meta.url));

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileName}`);
console.log(`Path to current directory is ${dirName}`);

export const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

