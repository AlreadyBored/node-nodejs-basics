import path from 'node:path';
import fs from 'node:fs';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import ('./files/c.js');

const prReadFile = promisify(fs.readFile);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;
try {
    if (random > 0.5) {
        unknownObject = JSON.parse(await prReadFile(`${__dirname}/files/a.json`));
    } else {
        unknownObject = JSON.parse(await prReadFile(`${__dirname}/files/b.json`));
    }
}
catch (err) {
    throw err
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

export default {
    unknownObject,
    myServer,
}