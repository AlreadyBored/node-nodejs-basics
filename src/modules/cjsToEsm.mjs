import path from 'node:path';
import {release, version} from 'node:os';
import {fileURLToPath} from 'node:url'
import {createServer as createServerHttp} from 'node:http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    ({default: unknownObject} = await import('./files/a.json', {assert: {type: 'json'}}));
} else {
    ({default: unknownObject} = await import('./files/b.json', {assert: {type: 'json'}}));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {unknownObject, createMyServer};

