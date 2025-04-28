import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import './files/c.cjs';

import aJson from './files/a.json' with { type: 'json' };
import bJson from './files/b.json' with { type: 'json' };

const FILENAME = fileURLToPath(import.meta.url);
const DIRNAME = dirname(FILENAME);

const random = Math.random();

const PORT = 3000;

const unknownObject = random > 0.5 ? aJson : bJson;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${FILENAME}`);
console.log(`Path to current directory is ${DIRNAME}`);

const myServer = createServerHttp((_, res) => res.end('Request accepted'));

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
