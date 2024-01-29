import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;
const require = createRequire(import.meta.url);
if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const thisFilePath = fileURLToPath(import.meta.url);
console.log(`Path to current file is ${thisFilePath}`);
console.log(`Path to current directory is ${path.dirname(thisFilePath)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { myServer, unknownObject }
