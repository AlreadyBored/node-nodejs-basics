import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import fs from 'fs';
import { fileURLToPath } from 'url';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
	unknownObject = JSON.parse(
		await fs.promises.readFile(
			path.join(fileURLToPath(import.meta.url), '..', 'files', 'a.json')
		)
	);
} else {
	unknownObject = JSON.parse(
		await fs.promises.readFile(
			path.join(fileURLToPath(import.meta.url), '..', 'files', 'b.json')
		)
	);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(
	`Path to current file is ${path.join(fileURLToPath(import.meta.url))}`
);
console.log(
	`Path to current directory is ${path.join(
		fileURLToPath(import.meta.url),
		'..'
	)}`
);

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
};
