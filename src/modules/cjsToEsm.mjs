import path from 'path';
import fs from 'fs';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

const filesPath = new URL(import.meta.url).pathname;
const dirname = path.dirname(filesPath);

if (random > 0.5) {
  unknownObject = fs.readFileSync(
    path.join(dirname, 'files', 'a.json'),
    'utf-8'
  );
} else {
  unknownObject = fs.readFileSync(
    path.join(dirname, 'files', 'b.json'),
    'utf-8'
  );
}

unknownObject = JSON.parse(unknownObject);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

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
