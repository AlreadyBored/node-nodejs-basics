import path from "path"
import { release, version } from "os"
import { createServer as createServerHttp } from "http"
import { fileURLToPath } from "url"

import "./files/c.js"

const random = Math.random()

let unknownObject

if (random > 0.5) {
  unknownObject = await import("./files/a.json", { with: { type: "json" } })
} else {
  unknownObject = await import("./files/b.json", { with: { type: "json" } })
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

const fileName = fileURLToPath(import.meta.url)
const directoryName = path.dirname(fileName)

console.log(`Path to current file is ${fileName}`)
console.log(`Path to current directory is ${directoryName}`)

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted")
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  console.log("To terminate it, use Ctrl+C combination")
})

export { unknownObject, myServer }
