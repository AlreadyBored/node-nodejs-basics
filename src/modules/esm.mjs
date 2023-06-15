import { sep } from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';

import { getFilePath, getDirPath } from '../fs/utils.js';

import './files/c.js';


const random = Math.random();

let unknownObject;

if (random > 0.5) {
    const { default: aJson } = await import('./files/a.json', { assert: { type: "json" } });
    unknownObject = aJson;
} else {
    const { default: bJson } = await import('./files/b.json', { assert: { type: "json" } });
    unknownObject = bJson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${getFilePath(import.meta.url)}`);
console.log(`Path to current directory is ${getDirPath(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default { unknownObject, myServer };
