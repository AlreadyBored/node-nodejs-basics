import fs from "node:fs";
import fsPromises from "node:fs/promises";


const rename = async () => {
  const oldPath = './src/fs/files/wrongFilename.txt';
  const newPath = './src/fs/files/properFilename.md';

  if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
    throw new Error("FS operation failed");
  }

  await fsPromises.rename(oldPath, newPath);
};

await rename();
