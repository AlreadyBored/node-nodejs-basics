import path from 'path'
import { release, version } from 'os'
import { createServer  as createServerHttp } from 'http'
import { getFileDirName } from '../utils/utils.js'
import './files/c.js'

const [__filename, __dirname] = await getFileDirName(import.meta.url)
const random = Math.random()
const jsonPath = random > 0.5 ? './files/a.json' : './files/b.json'
const unknownObject = await import(jsonPath, { assert: { type: 'json' } }).then(module => module.default)
        
console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)
console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export { unknownObject, createMyServer }