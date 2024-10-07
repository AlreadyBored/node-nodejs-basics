import * as path from 'path';
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http';
import * as a from './files/a.js'
import * as b from './files/b.js'
import * as c from './files/c.js'
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a;
} else {
    unknownObject = b;
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

module.exports = {
    unknownObject,
    myServer,
};

