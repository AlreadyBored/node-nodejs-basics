//const path = require('path');
import path from 'path'
import { fileURLToPath } from 'url';
//const { release, version } = require('os');
import { release, version } from 'os'
//const { createServer: createServerHttp } = require('http');
import { createServer as createServerHttp } from 'http'
//require('./files/c');
import * as file from './files/c.js';
import * as myJson from './files/a.json' assert {type: 'json'}
import * as myJson_2 from './files/b.json' assert {type: 'json'};

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    //unknownObject = require('./files/a.json');
    unknownObject = myJson
} else {
    //unknownObject = require('./files/b.json');
    unknownObject = myJson_2
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// module.exports = {
//     unknownObject,
//     myServer,
// };

export {unknownObject, myServer}

