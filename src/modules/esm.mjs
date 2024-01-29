import path from 'node:path';
import { release, version } from 'node:os';
import { createServer as createServerHttp } from 'node:http';
import './files/c.js';
import url from 'node:url';

/**
 * Experimental way of importing JSON
 */

// import aJson from "./files/a.json" assert { type: "json" };
// import bJson from "./files/b.json" assert { type: "json" };

/**
 * Classic way of importing JSON
 */

import fs from 'node:fs';

const aJson = JSON.parse(
    await fs.promises.readFile(
        new URL('./files/a.json', import.meta.url)
    )
);

const bJson = JSON.parse(
    await fs.promises.readFile(
        new URL('./files/b.json', import.meta.url)
    )
);

/* */

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = aJson;
} else {
    unknownObject = bJson;
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

export default {
    unknownObject,
    myServer,
};
