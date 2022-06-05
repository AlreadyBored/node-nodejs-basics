import path from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import './files/c.js'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const random = Math.random();

export let unknownObject = await import(random > 0.5 ? './files/a.json' : './files/b.json', { assert: { type: 'json' } }) 

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
})