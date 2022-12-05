// const path = require('path');
import path from 'path';
// const { release, version } = require('os');
import {release, version} from 'os';
// const { createServer: createServerHttp } = require('http');
import {createServer as createServerHttp} from 'http';
// require('./files/c');
import './files/c.js';
import {readFile} from 'fs/promises';
import {__dirnameGet, __filenameGet} from "../fs/utils.mjs";


const random = Math.random();
const meta = import.meta.url;
const __filename = __filenameGet(meta);
const __dirname = __dirnameGet(meta);

export let unknownObject;
// JSON modules in NodeJS 18 still experimental https://nodejs.org/docs/latest-v18.x/api/esm.html#json-modules
if (random > 0.5) {

  // unknownObject = require('./files/a.json');
  unknownObject = JSON.parse((await readFile(`${__dirname}/files/a.json`)).toString());
  // or unknownObject = await import(`${__dirname}/files/a.json`); run with option --experimental-json-modules
} else {
  // unknownObject = require('./files/b.json');
  unknownObject = JSON.parse((await readFile(`${__dirname}/files/b.json`)).toString());
  // or unknownObject = await import(`${__dirname}/files/b.json`); run with option --experimental-json-modules
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

