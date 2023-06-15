import fs from "fs"
import fsPromises from "fs/promises"


const rename = async () => {
  const oldPath = './src/fs/files/wrongFilename.txt'
  const newPath = './src/fs/properFilename.md'

  if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
    throw new Error("FS operation failed")
  }

  fsPromises.rename(oldPath, newPath)
};

await rename();
