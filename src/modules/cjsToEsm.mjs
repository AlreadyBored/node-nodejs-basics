import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { hello } from './files/c.js';
import { readFile } from 'fs/promises';

import { fileURLToPath } from 'url';

const random = Math.random();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let unknownObject;
hello();
if (random > 0.5) {
    await createUnknownObject('./files/a.json');
} else {
    await createUnknownObject('./files/b.json');
}

async function createUnknownObject(path) {
    const dataFromFile = await readFile(new URL(path, import.meta.url), 'utf-8');
    unknownObject = JSON.parse(dataFromFile);
}


console.log(`Release ${release}`);
console.log(`Version ${version}`);
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

