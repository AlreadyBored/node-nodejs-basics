/* 
You should refactor file (you can add additional imports if needed)
cjsToEsm.cjs - rewrite it to it"s equivalent in ECMAScript notation (and rename it to esm.mjs)
*/

import { path } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c";

let unknownObject;
(async () => {
    unknownObject = await import(
        Math.random() > 0.5 ?
            "./files/a.json" :
            "./files/b.json"
    );
})();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

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

export default {
    unknownObject,
    myServer,
};