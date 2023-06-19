import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    let jsonData = await import('./files/a.json', {assert: {type: "json"}});
    unknownObject = jsonData.default
} else {
    let jsonData = await import('./files/b.json', {assert: {type: "json"}});
    unknownObject = jsonData.default
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`);
console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const myServer = createServer((_, res) => {
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

