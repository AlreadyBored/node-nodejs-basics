import { createReadStream } from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const read = async () => {
  const filePath = `${directoryName}/files/fileToRead.txt`
  try {
    const readStream = createReadStream(filePath)
    readStream.pipe(process.stdout)
  } catch {
    console.error("FS operation failed")
  }
}

await read()
