import path from "path";

import {release, version} from "os";

import {createServer as createServerHttp} from "http";
import files0 from "./files/a.json" assert {type :'json'}

import files01 from "./files/b.json" assert {type :'json'}

import { fileURLToPath } from 'url';


// import c from "./files/c" ;

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = files0;
} else {
    unknownObject = files01;
}

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
//
// module.exports = {
//     unknownObject,
//     createMyServer,
// };

