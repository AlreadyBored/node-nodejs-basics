import { sep, dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { folderName } from '../constants.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const random = Math.random();
const unknownObject = JSON.parse(
    await readFile(
        new URL(
            `./${folderName}/${random > 0.5 ? 'a' : 'b'}.json`, 
            import.meta.url
        )
    )
);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};

