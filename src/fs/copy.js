import fs from "fs"
import fsPromises from "fs/promises"

const copy = async () => {
  const sourceFolderPath = './src/fs/files'
  const targetFolderPath = './src/fs/files_copy'

  if (!fs.existsSync(sourceFolderPath) || fs.existsSync(targetFolderPath)) {
    throw new Error("FS operation failed")
  }

  fsPromises.cp(sourceFolderPath, targetFolderPath, {recursive: true}, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await copy();
