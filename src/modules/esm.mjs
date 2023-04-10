import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import ('./files/c.js');

const random = Math.random();
const objA = import ('./files/a.json', { assert: { type: 'json' } })
const objB = import ('./files/b.json', { assert: { type: 'json' } })
let unknownObject;

if (random > 0.5) {
    unknownObject = objA;
} else {
    unknownObject = objB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServer((req, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer }

