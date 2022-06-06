//execute: node src/modules/cjsToEsm.mjs
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import {fileURLToPath} from "url";
import {} from './files/c.js';
import fs from 'fs';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await fs.promises.readFile(path.join(fileURLToPath(import.meta.url), '..', 'files', 'a.json')));
} else {
    unknownObject = JSON.parse(await fs.promises.readFile(path.join(fileURLToPath(import.meta.url), '..', 'files', 'b.json')));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.join(fileURLToPath(import.meta.url))}`);
console.log(`Path to current directory is ${path.join(fileURLToPath(import.meta.url), '..')}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

