// import * as path from 'path';
import { sep, dirname } from 'path';
import { release, version } from 'os';
import { fileURLToPath } from 'url';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

import objA from './files/a.json' assert { type: 'json' };
import objB from './files/b.json' assert { type: 'json' };

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = objA;
} else {
  unknownObject = objB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(
  `Path to current directory is ${dirname(fileURLToPath(import.meta.url))}`
);

export const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});
