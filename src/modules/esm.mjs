import path from 'node:path';
import { release, version } from 'node:os';
import { createServer }from 'node:http';
import { readFile } from 'node:fs/promises';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = await readFile('src/modules/files/a.json', 'utf8').then(
    JSON.parse
  );
} else {
  unknownObject = await readFile('src/modules/files/b.json', 'utf8').then(
    JSON.parse
  );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3001;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
