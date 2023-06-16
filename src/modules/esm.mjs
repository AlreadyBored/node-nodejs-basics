//const path = require('path');
import { sep } from 'path';
//const { release, version } = require('os');
import { release, version } from 'os';
//const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from 'http';
// require('./files/c');
import './files/c.js';
import { createRequire } from 'module';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

const require = createRequire(import.meta.url);
const objA = require('./files/a.json');
const objB = require('./files/b.json');

let unknownObject;

if (random > 0.5) {
  unknownObject = objA;
} else {
  unknownObject = objB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
