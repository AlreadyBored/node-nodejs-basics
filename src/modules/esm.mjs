import { dirname, sep } from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from "node:url";

import fileA from './files/a.json' assert { type: 'json' };
import fileB from './files/b.json' assert { type: 'json' };
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename) 

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fileA
} else {
  unknownObject = fileB 
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

export default {
    unknownObject,
    myServer,
};

