import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { fileURLToPath } from 'node:url';
import fs from 'fs';

import './files/c.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const aPath = path.resolve(__dirname, './files/a.json')
const bPath = path.resolve(__dirname, './files/b.json')

const aObj = JSON.parse(fs.readFileSync(aPath, 'utf-8'))
const bObj = JSON.parse(fs.readFileSync(bPath, 'utf-8'))

const random = Math.random()

let unknownObject

if (random > 0.5) {
    unknownObject = aObj
} else {
    unknownObject = bObj
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${import.meta.url}`)
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`)

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted')
});

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
    console.log('To terminate it, use Ctrl+C combination')
});

export { unknownObject, myServer }
