import { unlink, stat } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const deleteFile = async () => {
  const filePath = join(directoryName, "files", "fileToRemove.txt")
  try {
    await stat(filePath)
    await unlink(filePath)
  } catch {
    console.error("FS operation failed")
  }
}

await deleteFile()
