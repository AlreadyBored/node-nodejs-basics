import path from 'path';
import {release, version} from 'os';
import {fileURLToPath} from 'url';
import http from 'http';
import './files/c.js';

import a from './files/a.json' assert {type: 'json'};
import b from './files/b.json' assert {type: 'json'};

const random = Math.random();

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

export const unknownObject = random > 0.5 ? a : b;
