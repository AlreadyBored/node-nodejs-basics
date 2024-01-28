import path from 'path';
import os from 'os';
import http from 'http';
import aJson from './files/a.json' assert { type: 'json' };
import bJson from './files/b.json' assert { type: 'json' };
import './files/c.js';

const { release, version } = os;
const { createServer } = http;

const random = Math.random();

let unknownObject = random > 0.5 ? aJson : bJson;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };