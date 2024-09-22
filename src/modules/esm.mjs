import { sep, join } from 'path';
import { promises as fs } from 'fs';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

import { getFilePath, getDirPath } from '../utils/getDirPath.js'

const random = Math.random();
const filePath = getFilePath(import.meta.url);
const dirPath = getDirPath(import.meta.url);

let unknownObject;
if (random > 0.5) {
    unknownObject = await fs.readFile(join(dirPath, './files/a.json'), 'utf-8');
} else {
    unknownObject = await fs.readFile(join(dirPath, './files/b.json'), 'utf-8');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${dirPath}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export default {
    unknownObject,
    myServer,
};

