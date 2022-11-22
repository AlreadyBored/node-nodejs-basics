import path from "path";
import * as fs from 'fs';
import {fileURLToPath} from "url";
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

const loadJSON = (path) => JSON.parse(fs.readFileSync(new URL(path, import.meta.url)));

if (random > 0.5) {
    unknownObject = loadJSON(path.join(__dirname, 'files', 'a.json'))
} else {
    unknownObject = loadJSON(path.join(__dirname, 'files', 'b.json'))
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
    unknownObject
};

/*
export {
    unknownObject,
    createMyServer,
};
*/
