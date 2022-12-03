import path from 'path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import { release, version } from 'os';
import { fileURLToPath } from 'url';
import { createServer as createServerHttp } from 'http';
import  './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    // unknownObject = await import('./files/a.json', {
    //     assert: { type: 'json' }
    // });
    unknownObject = require('./files/a.json');
} else {
    // unknownObject = await import('./files/b.json', {
    //     assert: { type: 'json' }
    // });
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

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
    unknownObject,
    myServer,
};

