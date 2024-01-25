import fs from 'fs';
import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import { URL } from 'url';

const __filename = new URL('', import.meta.url).pathname;
const __dirname = new URL('.', import.meta.url).pathname;

const random = Math.random();
const filesDir = 'src/modules/files';
export let unknownObject;

if (random > 0.5) {
	unknownObject = JSON.parse(fs.readFileSync(`${ filesDir }/a.json`).toString());
} else {
	unknownObject = JSON.parse(fs.readFileSync(`${ filesDir }/b.json`).toString());
}

console.log(`Release ${ release() }`);
console.log(`Version ${ version() }`);
console.log(`Path segment separator is "${ path.sep }"`);

console.log(`Path to current file is ${ __filename }`);
console.log(`Path to current directory is ${ __dirname }`);

export const myServer = createServerHttp((_, res) => {
	res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
	console.log(`Server is listening on port ${ PORT }`);
	console.log('To terminate it, use Ctrl+C combination');
});
