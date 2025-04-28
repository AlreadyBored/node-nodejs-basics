import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

import './files/c.cjs';
import fileA from './files/a.json' with { type: 'json' };
import fileB from './files/b.json' with { type: 'json' };

const random = Math.random();

console.log(random)

let unknownObject;

if (random > 0.5) {
    unknownObject = fileA;
} else {
    unknownObject = fileB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const filePath = fileURLToPath(import.meta.url);
const dirPath = dirname(filePath);

console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${dirPath}`);

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

