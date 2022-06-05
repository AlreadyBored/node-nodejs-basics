import * as url from 'url';
import { sep } from 'path';
import { release, version } from 'os';
import { createServer } from 'https'
import { createRequire } from 'module';
import {defaultFunc} from './files/c.js';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const require = createRequire(import.meta.url);


const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject =  require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

defaultFunc()
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer =  createServer((_, res) => {
    res.end('Request accepted');
});

 export {
    unknownObject,
    createMyServer,
};

