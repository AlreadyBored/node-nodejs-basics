// const path = require('path');
import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import unknownObjectA from './files/a.json' assert { type: 'json' };
import unknownObjectB from './files/b.json' assert { type: 'json' };
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// import c from './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = unknownObjectA;
} else {
  unknownObject = unknownObjectB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

export default {
  unknownObject,
  createMyServer,
};

