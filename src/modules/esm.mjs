import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import aData from './files/a.json' assert {type: 'json'};
import bData from './files/b.json' assert {type: 'json'};
import * as c from './files/c.js';
import { fileURLToPath } from 'node:url';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aData;
} else {
    unknownObject = bData;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export  {
    unknownObject,
    myServer,
};

