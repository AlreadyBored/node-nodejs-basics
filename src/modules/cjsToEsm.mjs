import path from 'path';
import {release,version} from 'os';
import {createServer as createServerHttp} from 'http';
import {readFile} from 'node:fs/promises';
import url from 'url';
import './files/c.js';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const __filename = url.fileURLToPath(new URL('',import.meta.url));

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = await readFile(__dirname + '/files/a.json', {encoding: 'utf8'});
} else {
    unknownObject = await readFile(__dirname +'/files/b.json', {encoding: 'utf8'});
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

console.log(unknownObject);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

