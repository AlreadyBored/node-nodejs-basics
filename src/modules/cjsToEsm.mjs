import path  from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFileSync } from 'fs';

const dirname = path.resolve();

const aPath = path.join(dirname, 'files', 'a.json');
const bPath = path.join(dirname, 'files', 'b.json');

import './files/c.js';
const random = Math.random();

let unknownObject;



if (random > 0.5) {
    unknownObject = JSON.parse(readFileSync(aPath).toString());
} else {
    unknownObject = JSON.parse(readFileSync(bPath).toString());
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.baseName}`);
console.log(`Path to current directory is ${dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export  {
    unknownObject,
    createMyServer,
};

