import path from 'path';
import { release, version } from 'os';
import { createServer, } from 'http';

await import('./files/c.js')

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', { assert: { type: "json" } });
} else {
    unknownObject = await import('./files/b.json', { assert: { type: "json" } });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

export const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


