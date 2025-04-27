import path from 'path';

import { URL } from 'node:url';

import { createServer as createServerHttp } from 'http';
import { release, version } from 'os';
import * as unknownObject from './files/a.json' assert { type: "json" };
import './files/c.mjs';

const random = Math.random();

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

if (random > 0.5) {
    unknownObject
} else {
    unknownObject
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

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

export {
    myServer, unknownObject
};

