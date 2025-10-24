import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import './files/c.cjs';

// Get __filename and __dirname equivalents in ESM
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

const random = Math.random();

// Load using readFileSync
const unknownObject = random > 0.5
    ? JSON.parse(readFileSync(new URL('./files/a.json', import.meta.url), 'utf-8'))
    : JSON.parse(readFileSync(new URL('./files/b.json', import.meta.url), 'utf-8'));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${_filename}`);
console.log(`Path to current directory is ${_dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// ESM exports (replaces module.exports)
export { unknownObject, myServer };