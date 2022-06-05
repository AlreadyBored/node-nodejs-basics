import path from 'path';

import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';

import {readFile} from 'fs'
import './files/c';
import { fileURLToPath } from 'url';

const random = Math.random();

let unknownObject;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (random > 0.5) {
    readFile('./files/a.json', 'utf-8', (err, data) => {
        if (err) {
            throw new Error(err.message);
        } else {
            unknownObject = JSON.parse(data);
        }
    });
} else {
    readFile('./files/b.json', 'utf-8', (err, data) => {
        if (err) {
            throw new Error(err.message);
        } else {
            unknownObject = JSON.parse(data);
        }
    });
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

// module.exports = {
//     unknownObject,
//     createMyServer,
// };
export default unknownObject
export default unknownObject
