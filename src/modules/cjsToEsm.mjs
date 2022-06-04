import path from 'path'
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import aObj from './files/a.json' assert {type: "json"};
import bObj from './files/a.json' assert {type: "json"};
import * as c from './files/c.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = aObj;
} else {
    unknownObject = bObj;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

