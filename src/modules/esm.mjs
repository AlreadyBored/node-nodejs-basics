// https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1


// require statements are replaced with import statements
// https://dev.to/asyncbanana/how-to-use-esm-on-the-web-and-in-nodejs-3k04
import path from 'path';
import os from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = await import('./files/a.json');
} else {
    unknownObject = await import('./files/b.json');
}


console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);


// https://nodejs.org/api/esm.html
console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(new URL(import.meta.url).pathname)}`);


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
    myServer,
};

