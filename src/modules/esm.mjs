import path, { dirname } from "path";
import { release, version } from "os";
import http from "http";
import { createRequire } from "node:module";

const currentDirectory = dirname(new URL(import.meta.url).pathname);

const requireModule = createRequire(import.meta.url);

const unknownObject =
    Math.random() > 0.5 ? requireModule("./files/a.json") : requireModule("./files/b.json");

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${currentDirectory}`);

const myServer = http.createServer((request, response) => {
    response.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export default {
    unknownObject,
    myServer,
};

/* 
const path = require('path');const { release, version } = require('os');
const { createServer: createServerHttp } = require('http');
require('./files/c');

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
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

*/
