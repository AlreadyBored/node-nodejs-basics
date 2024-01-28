import path from 'path';
import { release, version } from 'os';
import {createServer as createServerHttp} from 'http';
import { dirname, basename } from 'path';
import { createRequire } from 'module';
import './files/c.js';

const PORT = 3000;

const random = Math.random();
const importFile = createRequire(import.meta.url);
const __filename = basename(import.meta.url);
const __dirname = dirname(import.meta.url);

let unknownObject;

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

if (random > 0.5) {
    unknownObject = importFile('./files/a.json');
} else {
    unknownObject = importFile('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
