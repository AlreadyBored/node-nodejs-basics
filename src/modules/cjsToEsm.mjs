import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import * as a from './files/a.json';
import * as b from './files/b.json';
import './files/c';

const random = Math.random();

const unknownObject = random > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

