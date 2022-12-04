import fs from "fs/promises"
import { getFilesPath, exists } from "../utils/index.js"

const read = async () => {
  // Write your code here
  const fileToRead = getFilesPath(import.meta.url, "fileToRead.txt")

  if (!(await exists(fileToRead))) throw Error("FS operation failed")

  const file = await fs.readFile(fileToRead, "utf8")
  console.log(file)
}

await read()
