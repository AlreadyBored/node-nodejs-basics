import path from 'path';
import { release, version } from 'os';
import { createServer  as createServerHttp } from 'http';
import './files/c.js';

// Мой код
import { resolve } from 'path'
const __filename = resolve('src','modules','cjsToEsm.mjs')
const __dirname = resolve()
// -------------------------

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject =  import('./files/a.json', {assert: {type: "json"}});
} else {
    unknownObject = import('./files/b.json', {assert: {type: "json"}});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

