import fs from "fs/promises"
import exists from "./exists.js"

const copy = async () => {
  // Write your code here
  const basePath = "src/fs"
  const copyPath = `${basePath}/files_copy`
  const originalPath = `${basePath}/files`

  if (!(await exists(originalPath)) || (await exists(copyPath)))
    throw Error("FS operation failed")

  await fs.mkdir(copyPath)
  const dir = await fs.opendir(originalPath)
  await copyFiles(originalPath, copyPath, dir)
}

const copyFiles = async (from, to, dir) => {
  const entry = await dir.read()
  if (!entry) return
  await fs.copyFile(`${from}/${entry.name}`, `${to}/${entry.name}`)
  return await copyFiles(from, to, dir)
}

copy()
