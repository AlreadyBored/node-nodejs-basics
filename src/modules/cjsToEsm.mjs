import * as path from "path";
import {release, version} from "os";
import {createServer as createServerHttp} from "http";
import {dirname} from "path";
import {fileURLToPath} from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const c = import(__dirname + '/files/c.js');

const random = Math.random(),
    server = createServerHttp((_, res) => {
        res.end('Request accepted');
    });

let jsonFilePath = __dirname + '/files/' + (random > 0.5 ? 'a' : 'b') + '.json';
let jsonFile = require(jsonFilePath);

console.log(
    `Release ${release()}`, '\n',
    `Version ${version()}`, '\n',
    `Path segment separator is "${path.sep}"`, '\n',
    `Path to current file is ${__filename}`, '\n',
    `Path to current directory is ${__dirname}`, '\n',
);

export {
    jsonFile,
    server
};