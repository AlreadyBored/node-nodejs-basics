import { writeFile, readFile } from "fs/promises"
import { dirname } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const create = async () => {
  const filePath = `${directoryName}/files/fresh.txt`
  try {
    await readFile(filePath)
    throw new Error("FS operation failed")
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error
    }
    const content = "I am fresh and young"
    await writeFile(filePath, content)
    console.log("File created successfully")
  }
}

await create()
