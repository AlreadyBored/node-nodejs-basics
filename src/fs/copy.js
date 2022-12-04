import fs from "fs/promises"
import { join } from "path"
import { getPaths, exists, applyToAllFiles } from "../utils/index.js"

const copy = async () => {
  // Write your code here
  const [copyPath, originalPath] = getPaths(
    import.meta.url,
    ["files_copy"],
    ["files"]
  )

  if (!(await exists(originalPath)) || (await exists(copyPath)))
    throw Error("FS operation failed")

  await fs.mkdir(copyPath)
  const dir = await fs.opendir(originalPath)
  await applyToAllFiles(
    dir,
    async entry =>
      await fs.copyFile(
        join(originalPath, entry.name),
        join(copyPath, entry.name)
      )
  )
}

copy()
