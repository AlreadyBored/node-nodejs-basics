import os from 'os';
import path from 'path';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.resolve(dirname(fileURLToPath(import.meta.url)));
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    const i = await import('./files/a.json', { assert: { type: "json" }});
    unknownObject = i;
} else {
    const i = await import('./files/b.json', { assert: { type: "json" }});
    unknownObject = i;
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject.default);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
