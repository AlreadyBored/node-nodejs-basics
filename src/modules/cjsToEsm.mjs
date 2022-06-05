import path from "path";
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {fileURLToPath} from 'url';
import * as fs from 'fs';
const aJson = JSON.parse(fs.readFileSync('./files/a.json'));
const bJson = JSON.parse(fs.readFileSync('./files/b.json'));
const c = fs.readFileSync('./files/c.js', 'utf8');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aJson;
} else {
    unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer
}

