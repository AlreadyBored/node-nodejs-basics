import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Implement '__filename' and '__dirname' variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read 'a.json' and 'b.json' file contents
const aJson = readFileSync(path.resolve(__dirname, 'files', 'a.json'), 'utf8');
const bJson = readFileSync(path.resolve(__dirname, 'files', 'b.json'), 'utf8');

// Parse them string to object
const a = JSON.parse(aJson);
const b = JSON.parse(bJson);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
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

export { unknownObject, myServer };
