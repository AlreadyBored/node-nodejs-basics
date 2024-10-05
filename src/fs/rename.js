import { rename as promiseRename, stat } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const rename = async () => {
  const wrongPath = join(directoryName, "files", "wrongFilename.txt")
  const properPath = join(directoryName, "files", "properFilename.md")
  try {
    try {
      await stat(properPath)
      throw new Error("FS operation failed")
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error
      }
    }
    await stat(wrongPath)
    await promiseRename(wrongPath, properPath)
  } catch {
    console.error("FS operation failed")
  }
}

await rename()
