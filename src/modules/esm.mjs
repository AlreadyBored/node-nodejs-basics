import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'fs/promises';
import { release, version } from 'node:os';
import { createServer } from 'node:http';

import './files/c.cjs';
const filesA = JSON.parse(
  await readFile(
    new URL('./files/a.json', import.meta.url)
  )
);
const filesB = JSON.parse(
  await readFile(
    new URL('./files/b.json', import.meta.url)
  )
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();

const unknownObject = random > 0.5 ? filesA : filesB;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

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
