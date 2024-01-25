import http from 'http';
import path from 'path';
import { release, version } from 'os';
import fs from 'fs';
import { fileURLToPath } from 'url';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = fs.readFileSync('./modules/files/a.json');
} else {
    unknownObject = fs.readFileSync('./modules/files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject.toString());

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});