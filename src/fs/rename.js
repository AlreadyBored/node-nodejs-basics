import { exists, getFilesPaths } from "../utils/index.js"
import fs from "fs/promises"

const rename = async () => {
  // Write your code here
  const [wrongFilePath, properFilePath] = getFilesPaths(
    import.meta.url,
    "wrongFilename.txt",
    "properFilename.md"
  )

  if (!(await exists(wrongFilePath)) || (await exists(properFilePath)))
    throw Error("FS operation failed")

  await fs.rename(wrongFilePath, properFilePath)
}

await rename()
