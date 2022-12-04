import { exists } from "./utils.js"
import fs from "fs/promises"

const remove = async () => {
  // Write your code here
  const path = "src/fs/files/fileToRemove.txt"

  if (!(await exists(path))) throw Error("FS operation failed")

  await fs.rm(path)
}

await remove()
