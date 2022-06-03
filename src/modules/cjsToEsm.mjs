import path from 'path'
import fs from 'fs'
import { fileURLToPath, pathToFileURL } from 'url'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import(
    pathToFileURL(path.dirname(fileURLToPath(import.meta.url))) +
        '\\files\\c.js'
).then(() => {})

const random = Math.random()

let unknownObject

if (random > 0.5) {
    unknownObject = JSON.parse(
        fs.readFileSync(
            path.dirname(fileURLToPath(import.meta.url)) + '\\files\\a.json',
            'utf8'
        )
    )
} else {
    unknownObject = JSON.parse(
        fs.readFileSync(
            path.dirname(fileURLToPath(import.meta.url)) + '\\files\\b.json',
            'utf8'
        )
    )
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${fileURLToPath(import.meta.url)}`)
console.log(
    `Path to current directory is ${path.dirname(
        fileURLToPath(import.meta.url)
    )}`
)

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted')
})

export { unknownObject, createMyServer }
