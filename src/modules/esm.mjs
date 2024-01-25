import path, { dirname } from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { fileURLToPath } from 'url'
import { readFile } from 'fs/promises';
import  './files/c.js';

const file = fileURLToPath(import.meta.url);
const dir = dirname(file); 

const aPath = path.join(dir, './files/a.json');
const bPath = path.join(dir, './files/b.json')

const random = Math.random();

export const unknownObject = (random > 0.5) ?
    JSON.parse(await readFile(aPath)):
    JSON.parse(await readFile(bPath));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${file}`);
console.log(`Path to current directory is ${dir}`);

export const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
