import path, {dirname} from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {fileURLToPath} from "url";

import('./files/c.js');

const random = Math.random();

const unknownObject = (random > 0.5)
    ? await import('./files/a.json', {assert:{type:'json'}})
    : await import('./files/b.json', {assert:{type:'json'}})

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};

