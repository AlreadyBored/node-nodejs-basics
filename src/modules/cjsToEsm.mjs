import { release, version } from 'os';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { sep, dirname } from 'path';
import './files/c.js';

const random = Math.random(),
  require = createRequire(import.meta.url),
  __filename = fileURLToPath(import.meta.url),
  __dirname = dirname(__filename);

export let unknownObject;

if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServer((_, res) => {
  res.end('Request accepted');
});

createMyServer.on('error', (err) => {
  throw err;
})