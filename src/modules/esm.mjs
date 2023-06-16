import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

const filePathA = path.join(__dirname, 'files', 'a.json');
const filePathB = path.join(__dirname, 'files', 'b.json');

if (random > 0.5) {
    unknownObject = await readFile(filePathA, 'utf-8');
} else {
    unknownObject = await readFile(filePathB, 'utf-8');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${new URL(import.meta.url).pathname}`);
console.log(`Path to current directory is ${path.dirname(new URL(import.meta.url).pathname)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
