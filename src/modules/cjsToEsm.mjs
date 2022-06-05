import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };
import { fileURLToPath } from 'url';

// You should refactor file (you can add additional imports if needed)

// cjsToEsm.cjs - rewrite it to it's equivalent in ECMAScript notation (and switch extension to .mjs)

const random = Math.random();

let _unknownObject;

if (random > 0.5) {
    _unknownObject = a;
} else {
    _unknownObject = b;
}

export const unknownObject = _unknownObject;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${fileURLToPath(new URL('./', import.meta.url))}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});
