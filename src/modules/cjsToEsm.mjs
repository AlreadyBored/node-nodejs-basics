import path from 'path';
import  { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import './files/c.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(
        await readFile(path.resolve(__dirname, 'files', 'a.json'))
    );
} else {
    unknownObject = JSON.parse(
        await readFile(path.resolve(__dirname, 'files', 'b.json'))
    );
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

