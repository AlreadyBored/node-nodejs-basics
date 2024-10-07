import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import fs from 'fs';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    const aPath = new URL('./files/a.json', import.meta.url);
    unknownObject = JSON.parse(fs.readFileSync(aPath, 'utf-8'));
} else {
    const bPath = new URL('./files/b.json', import.meta.url);
    unknownObject = JSON.parse(fs.readFileSync(bPath, 'utf-8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${import.meta.url}`);

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