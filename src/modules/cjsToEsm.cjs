import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import('./files/c');
import a from './files/a.json' assert {type: 'json'}
import b from './files/b.json' assert {type: 'json'}

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filename = fileURLToPath(import.meta.url);
const directory = dirname(filename)

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${directory}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

