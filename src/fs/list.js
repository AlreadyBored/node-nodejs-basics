import fs from "fs/promises"
import { exists, applyToAllFiles, getPath } from "../utils/index.js"

const list = async () => {
  // Write your code here
  const path = getPath(import.meta.url, "files")

  if (!(await exists(path))) throw Error("FS operation failed")

  const dir = await fs.opendir(path)
  await applyToAllFiles(dir, entry => console.log(entry.name))
}

await list()
