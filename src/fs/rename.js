import exists from "./exists.js"
import fs from "fs/promises"

const rename = async () => {
  // Write your code here
  const basePath = "src/fs/files"
  const wrongFilePath = `${basePath}/wrongFilename.txt`
  const properFilePath = `${basePath}/properFilename.md`

  if (!(await exists(wrongFilePath)) || (await exists(properFilePath)))
    throw Error("FS operation failed")

  await fs.rename(wrongFilePath, properFilePath)
}

await rename()
