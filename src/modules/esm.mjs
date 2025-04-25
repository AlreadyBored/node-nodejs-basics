import path from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import './files/c.js';

const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json', {
        assert: { type: 'json' },
    });
} else {
    unknownObject = await import('./files/b.json', {
        assert: { type: 'json' },
    });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const server = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject.default); 

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, server };
