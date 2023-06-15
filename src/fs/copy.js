import fs from "node:fs";
import fsPromises from "node:fs/promises";

const copy = async () => {
  const sourceFolderPath = './src/fs/files';
  const targetFolderPath = './src/fs/files_copy';

  if (!fs.existsSync(sourceFolderPath) || fs.existsSync(targetFolderPath)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.cp(sourceFolderPath, targetFolderPath, {recursive: true});
};

await copy();
