import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const random = Math.random();

let unknownObject;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
if (random > 0.5) {
  unknownObject = await fs.readFile(new URL('./files/a.json', import.meta.url));
} else {
  unknownObject = await fs.readFile(new URL('./files/b.json', import.meta.url));
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
