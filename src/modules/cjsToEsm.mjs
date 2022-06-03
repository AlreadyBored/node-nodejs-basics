import { createServer as createServerHttp } from 'node:http'
import { createRequire } from 'node:module'
import { release, version } from 'node:os'
import { dirname, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

import './files/c.js'

const require = createRequire(import.meta.url)
const random = Math.random()
const unknownObject =
  random > 0.5 ? require('./files/a.json') : require('./files/b.json')

// Динамический импорт выдает предупреждение
// if (random > 0.5) {
//   unknownObject = await import('./files/a.json', { assert: { type: 'json' } })
// } else {
//   unknownObject = await import('./files/b.json', { assert: { type: 'json' } })
// }

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${sep}"`)

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(`Path to current file is ${__filename}`)
console.log(`Path to current directory is ${__dirname}`)

const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted')
})

export { unknownObject, createMyServer }
