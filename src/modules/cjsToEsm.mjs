// const path = require('path');
import  * as path from 'path';
// const { release, version } = require('os');
import  { release, version } from 'os';
// const { createServer: createServerHttp } = require('http');
import  { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

// require('./files/c');
import './files/c.mjs';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    // unknownObject = require('./files/a.json');
    unknownObject = import('./files/a.json', {
        assert: {
            type: 'json'
        }
    });
} else {
    // unknownObject = require('./files/b.json');
    unknownObject = import('./files/b.json', {
        assert: {
            type: 'json'
        }
    });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

// module.exports = {
//     unknownObject,
//     createMyServer,
// };
export {
    unknownObject,
    createMyServer,
};
