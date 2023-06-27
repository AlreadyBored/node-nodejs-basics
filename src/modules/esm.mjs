import path from 'path'; // or import path from 'node:path';
import { release, version } from 'os'; // or import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'http'; // or import { createServer } from 'node:http';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// import a from './files/a.json' assert { type: 'json' };
// import b from './files/b.json' assert { type: 'json' };
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
	unknownObject = require('./files/a.json'); // when import { createRequire } and const require
	// unknownObject = a; // when import a from './files/a.json' assert { type: 'json' };
} else {
	unknownObject = require('./files/b.json'); // when import { createRequire } and const require
	// unknownObject = b; // import b from './files/b.json' assert { type: 'json' };
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
