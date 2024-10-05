import { createWriteStream } from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const write = async () => {
  const filePath = `${directoryName}/files/fileToWrite.txt`
  const writeStream = createWriteStream(filePath)
  process.stdin.pipe(writeStream)
  writeStream.on("finish", () => {
    console.log("File written")
  })
}

await write()
