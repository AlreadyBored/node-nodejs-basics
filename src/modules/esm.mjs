import path from 'node:path';
import { release, version } from 'node:os';
import {fileURLToPath} from 'node:url';

export const unknownObject = async () => {
    const random = Math.random();

    let unknownObject;

    if (random > 0.5) {
        unknownObject = await import("./files/a.json",{assert: { type: "json" }});
    } else {
        unknownObject = await import("./files/b.json",{assert: { type: "json" }});
    }
    console.log(unknownObject)
}

export const myServer = http.createServer((req) => {
    req.end('Request accepted');
});


    console.log(`Release ${release()}`);
    console.log(`Version ${version()}`);
    console.log(`Path segment separator is "${path.sep}"`);

    console.log(`Path to current file is ${path.basename(fileURLToPath(import.meta.url))}`);
    console.log(`Path to current directory is ${path.dirname(fileURLToPath(import.meta.url))}`);

const PORT = 3000;

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


