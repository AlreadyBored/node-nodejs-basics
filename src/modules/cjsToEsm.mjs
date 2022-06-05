import url from 'url';
import path from 'path';
import { release, version } from 'os';
import http from'http';
import './files/c.js';
import fs from 'fs';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(fs.readFileSync('./files/a.json').toString());
} else {
    unknownObject = JSON.parse(fs.readFileSync('./files/b.json').toString());
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};