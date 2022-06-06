import path from 'path'
import { fileURLToPath } from 'url';
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import * as file from './files/c.js';
import myJson from './files/a.json' assert {type: 'json'}
import myJson_2 from './files/b.json' assert {type: 'json'};

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = myJson
} else {
    unknownObject = myJson_2
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {unknownObject, createMyServer}

// запускать так node --experimental-json-modules cjsToEsm.mjs