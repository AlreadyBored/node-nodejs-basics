import path from "path";
import { readFile } from 'fs/promises';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import "./files/c.js";

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    const data = await readFile(new URL('./files/a.json', import.meta.url), 'utf-8');
    unknownObject = JSON.parse(data);
} else {
    const data = await readFile(new URL('./files/b.json', import.meta.url), 'utf-8');
    unknownObject = JSON.parse(data);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${process.cwd()}`);

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

