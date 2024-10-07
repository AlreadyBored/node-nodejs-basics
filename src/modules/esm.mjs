import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust this path to point to your 'files' directory
const filesDir = path.join(__dirname, 'files');

// Import c.js using an absolute path
await import(path.join(filesDir, 'c.js'));

const random = Math.random();

let unknownObject;

try {
    if (random > 0.5) {
        unknownObject = JSON.parse(await fs.readFile(path.join(filesDir, 'a.json'), 'utf-8'));
    } else {
        unknownObject = JSON.parse(await fs.readFile(path.join(filesDir, 'b.json'), 'utf-8'));
    }
} catch (error) {
    console.error('Error reading JSON file:', error);
    unknownObject = {};
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