import fs from 'node:fs';
import fsPromises from 'node:fs/promises';
import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';

const script = fs.readFileSync('./src/modules/files/c.js').toString();
global.eval(script);

// This variant is also possible (but with warning in console)
// import jsonA from './files/a.json' assert { type: 'json' };
// import jsonB from './files/b.json' assert { type: 'json' };

const jsonA = JSON.parse(
  await fsPromises.readFile(new URL('./files/a.json', import.meta.url))
);
const jsonB = JSON.parse(
  await fsPromises.readFile(new URL('./files/b.json', import.meta.url))
);

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = jsonA
} else {
  unknownObject = jsonB
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

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

export default {
  unknownObject,
  myServer,
};

