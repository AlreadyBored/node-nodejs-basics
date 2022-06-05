import path  from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { getDirAndFilePath } from '../helpers.js';

const { __dirname, __filename } = getDirAndFilePath(import.meta);

const random = Math.random();

let unknownObject;

import(`./files/${random > 0.5 ? 'a' : 'b'}.json`, { assert: { type: 'json' } })
    .then(importedModule => {
        unknownObject = importedModule.default;
    });

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

