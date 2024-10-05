import { readFile, stat } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const read = async () => {
  const filePath = join(directoryName, "files", "fileToRead.txt")
  try {
    await stat(filePath)
    const content = await readFile(filePath, "utf-8")
    console.log(content)
  } catch {
    console.error("FS operation failed")
  }
}

await read()
