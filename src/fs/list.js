import fs from "fs/promises"
import { exists, applyToAllFiles } from "./utils.js"

const list = async () => {
  // Write your code here
  const path = "src/fs/files"

  if (!(await exists(path))) throw Error("FS operation failed")

  const dir = await fs.opendir(path)
  await applyToAllFiles(dir, entry => console.log(entry.name))
}

await list()
