import path from 'path'
import { readFile } from 'fs/promises';
import { release, version } from 'os'
import { createServer as createServerHttp} from 'http'
import {} from './files/c.mjs'

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    unknownObject = JSON.parse(
        await readFile(
            new URL('./files/a.json', import.meta.url)
        )
    );
} else {
    unknownObject = JSON.parse(
        await readFile(
            new URL('./files/b.json', import.meta.url)
        )
    );
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${global.__filename}`);
console.log(`Path to current directory is ${global.__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

