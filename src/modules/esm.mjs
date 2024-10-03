// Imports were changed
import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

// Imports were changed
if (random > 0.5) {
    unknownObject = await import('./files/a.json', { with: { type: 'json' } });
} else {
    unknownObject = await import('./files/b.json', { with: { type: 'json' } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${new URL(import.meta.url).pathname}`);
console.log(`Path to current directory is ${path.dirname(new URL(import.meta.url).pathname)}`);

// Server creation was changed
const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

// Export was changed
export { unknownObject, myServer };
