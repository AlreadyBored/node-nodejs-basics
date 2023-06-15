import fs from 'fs';
import path, { sep } from 'path';
import os from 'os';
import http from 'http';
import './files/c.js'; 

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(await fs.promises.readFile(new URL('./files/a.json', import.meta.url)));
} else {
    unknownObject = JSON.parse(await fs.promises.readFile(new URL('./files/b.json', import.meta.url)));
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = http.createServer((_, res) => {
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

