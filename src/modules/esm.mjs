import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import a from './files/a.json' assert { type: 'json' };
import b from './files/b.json' assert { type: 'json' };
import './files/c.js';
import { getPath } from '../../utils/get.path.js';

export const unknownObject = Math.random() > 0.5 ? a : b;

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is '${path.sep}'`);


console.log(`Path to current file is ${getPath(import.meta.url)}`);
console.log(`Path to current directory is ${getPath(import.meta.url)}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});