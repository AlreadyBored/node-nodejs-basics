import path from "path";
import fs from 'fs';
import {release, version} from 'os'
import {createServer as createServerHttp} from 'http';
import {fileURLToPath} from 'url';

import './files/c.js'

let unknownObject

const random = Math.random();
const aJson = fs.readFileSync('./files/a.json', 'utf8');
const bJson = fs.readFileSync('./files/b.json', 'utf8');

if (random > 0.5) {
    unknownObject = JSON.parse(aJson);
} else {
    unknownObject = JSON.parse(bJson);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
