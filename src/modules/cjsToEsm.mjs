
import * as path from 'path'
import * as os from 'os'
import * as http from 'http'
import  './files/c.js'
import * as a from './files/a.json' assert {type: "json"}
import * as b from './files/b.json' assert {type: "json"}

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = a
} else {
    unknownObject = b
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${path.toNamespacedPath("cjsToEsm.mjs")}`);
console.log(`Path to current directory is ${path.dirname("modules/cjsToEsm.mjs")}`);

const createMyServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

export const objects = {
    unknownObject,
    createMyServer,
};

