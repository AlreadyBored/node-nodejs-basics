import * as path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { createRequire } from "module";
import { fileURLToPath } from "url";

import "./files/c.js";

const random = Math.random();
const { url } = import.meta;

let unknownObject;

const require = createRequire(url);
if (random > 0.5) {
    unknownObject = require("./files/a.json");
} else {
    unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(url);
const __dirname = path.dirname(__filename);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
