import path from 'node:path';
import os from 'node:os';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { readFile } from 'fs/promises';

import './files/c.cjs';

const random = Math.random();

const aJson = JSON.parse(await readFile('./src/modules/files/a.json', 'utf8'));
const bJson = JSON.parse(await readFile('./src/modules/files/b.json', 'utf8'));

const unknownObject = random > 0.5 ? aJson : bJson;

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export {
  unknownObject,
  myServer,
};

