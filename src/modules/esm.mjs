import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cjsModulePath = pathToFileURL(path.join(__dirname, 'files', 'c.cjs')).href;

await import(cjsModulePath);

let unknownObject;

const jsonAPath = pathToFileURL(path.join(__dirname, 'files', 'a.json')).href;
const jsonBPath = pathToFileURL(path.join(__dirname, 'files', 'b.json')).href;

if (Math.random() > 0.5) {
    unknownObject = await import(jsonAPath, { with: { type: 'json' } });
} else {
    unknownObject = await import(jsonBPath, { with: { type: 'json' } });
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

export {
    unknownObject,
    myServer
};
