import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${dirname(__filename)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};
