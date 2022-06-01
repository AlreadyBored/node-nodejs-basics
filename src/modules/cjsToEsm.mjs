import * as  path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
const createServerHttp = createServer

import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import * as c from './files/c.js';

const random = Math.random();

let unknownObject = JSON.parse(
    await readFile(
        new URL(
            random > 0.5
                ? '../files/a.json'
                : './files/b.json'

            , import.meta.url)
    )
);



console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)
    }`);
console.log(`Path to current directory is ${dirname(
    fileURLToPath(import.meta.url)
)}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

