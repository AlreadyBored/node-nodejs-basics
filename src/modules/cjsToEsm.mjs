import { sep } from 'node:path';
import { readFile } from 'node:fs/promises';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import * as c from './files/c.js';

const aJSON = JSON.parse(
    await readFile(
        new URL('./files/a.json', import.meta.url)
    )
);

const bJSON = JSON.parse(
    await readFile(
        new URL('./files/b.json', import.meta.url)
    )
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aJSON;
} else {
    unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

