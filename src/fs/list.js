import { readdir, stat } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const list = async () => {
  const dirPath = join(directoryName, "files")
  try {
    await stat(dirPath)
    const files = await readdir(dirPath)
    console.log(files)
  } catch {
    console.error("FS operation failed")
  }
}

await list()
