import fs from "fs/promises"
import { exists, applyToAllFiles } from "./utils.js"

const copy = async () => {
  // Write your code here
  const basePath = "src/fs"
  const copyPath = `${basePath}/files_copy`
  const originalPath = `${basePath}/files`

  if (!(await exists(originalPath)) || (await exists(copyPath)))
    throw Error("FS operation failed")

  await fs.mkdir(copyPath)
  const dir = await fs.opendir(originalPath)
  await applyToAllFiles(
    dir,
    async entry =>
      await fs.copyFile(
        `${originalPath}/${entry.name}`,
        `${copyPath}/${entry.name}`
      )
  )
}

copy()
