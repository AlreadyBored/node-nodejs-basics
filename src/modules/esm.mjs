import {sep} from 'path';
import {release,version} from 'os';
import {createServer as createServerHttp} from 'http';

import path from 'path'
import {fileURLToPath} from 'url'
import './files/c.js';

const scriptPath=fileURLToPath(import.meta.url)

const dirName=path.dirname(scriptPath)


import aJSON from './files/a.json' assert {type: 'json'}
import bJSON from './files/b.json' assert {type: 'json'}

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aJSON;
} else {
    unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${scriptPath}`);
console.log(`Path to current directory is ${dirName}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

