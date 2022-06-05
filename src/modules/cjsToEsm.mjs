import path from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'

import { createRequire } from "module";
const require = createRequire(import.meta.url)
require('./files/c.cjs')

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const {random} = Math.random();

let unknownObject = (random > 0.5)
    ? import('./files/a.json')
    : import('./files/b.json')


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

// console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer
};

