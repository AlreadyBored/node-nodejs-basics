import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer } from 'http';
import './files/c.js';

const aFile = fs.readFileSync('./src/modules/files/a.json', {encoding: 'utf8'});
const bFile = fs.readFileSync('./src/modules/files/b.json', {encoding: 'utf8'});
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aFile;
} else {
    unknownObject = bFile;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
