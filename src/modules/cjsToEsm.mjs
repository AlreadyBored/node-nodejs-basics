import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { release, version } from 'os';
import { createServer } from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();
const pathString = random > 0.5 ? './files/a.json' : './files/b.json';

const unknownObject = path.resolve(__dirname, pathString);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

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

export const unknownObjectData = unknownObject;
export const myServerData = myServer;
