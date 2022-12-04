import fs from "fs/promises"
import { exists, getFilesPath } from "../utils/index.js"

const remove = async () => {
  // Write your code here
  const path = getFilesPath(import.meta.url, "fileToRemove.txt")

  if (!(await exists(path))) throw Error("FS operation failed")

  await fs.rm(path)
}

await remove()
