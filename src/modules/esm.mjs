import path from 'path'
import fs from 'fs'
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'url';
import './files/c.js';

const random = Math.random();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export let unknownObject;
let pathObject = '';

if (random > 0.5) {
    pathObject = '/files/a.json';

} else {
    pathObject = '/files/b.json';
}

const data = fs.readFileSync(path.join(__dirname, pathObject), { encoding: 'utf8' });
unknownObject = JSON.parse(data);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

