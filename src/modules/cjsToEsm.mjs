import {sep} from 'path';
import { release, version } from 'os';
import {  createServer  } from 'http';
import c from './files/c.js';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };
import { dirname } from 'path';
import { fileURLToPath } from 'url';

c;

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`);

export const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});


