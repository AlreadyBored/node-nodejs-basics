import { mkdir, readdir, stat, copyFile } from "fs/promises"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const fileName = fileURLToPath(import.meta.url)
const directoryName = dirname(fileName)

const copyDir = async (src, dest) => {
  const values = await readdir(src, { withFileTypes: true })
  for (const value of values) {
    const srcPath = join(src, value.name)
    const destPath = join(dest, value.name)
    if (value.isFile()) {
      await copyFile(srcPath, destPath)
    } else {
      await mkdir(destPath)
      await copyDir(srcPath, destPath)
    }
  }
}

const copy = async () => {
  const srcDir = join(directoryName, "files")
  const destDir = join(directoryName, "files_copy")
  try {
    try {
      await stat(destDir)
      throw new Error("FS operation failed")
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error
      }
    }
    await stat(srcDir)
    await mkdir(destDir, { recursive: true })
    await copyDir(srcDir, destDir)
  } catch {
    console.error("FS operation failed")
  }
}

await copy()
