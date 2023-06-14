import path, { dirname } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import fsPromises from 'fs/promises';
import('./files/c.js');

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, 'files', 'a.json'), 'utf-8'));
} else {
    unknownObject = JSON.parse(await fsPromises.readFile(path.resolve(__dirname, 'files', 'b.json'), 'utf-8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

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

