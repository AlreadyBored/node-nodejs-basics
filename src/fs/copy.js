import { mkdir, readdir, copyFile } from "node:fs/promises"
import path from "path"

const copy = async () => {
  const filesPath = path.resolve("./files")
  const filesCopyPath = path.resolve("./files_copy")

  try {
    await mkdir(filesCopyPath)

    const files = await readdir(filesPath)

    files.forEach(async (file) => {
      await copyFile(
        path.join(filesPath, file),
        path.join(filesCopyPath, file),
      )
    })
  } catch {
    console.log("FS operation failed")
  }
};

copy();
