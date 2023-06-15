import { release, version } from 'os';
import { createServer } from 'http';
import { dirname, sep } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

const importPath = random > 0.5 ? './files/a.json' : './files/b.json';

const jsonModule = await import(importPath, {assert: {type: 'json'}});
const unknownObject = jsonModule.default;

console.log(unknownObject);


console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


export {myServer, unknownObject}
