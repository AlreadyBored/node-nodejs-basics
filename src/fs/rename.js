import fs from "fs/promises";
import path from "path";

const rename = async () => {
  const oldFile = path.join(process.cwd(), "files", "wrongFilename.txt");
  const newFile = path.join(process.cwd(), "files", "properFilename.md");

  // checking oold file exits or not
  // checking new file exits already
  const oldFileExist = await fs
    .access(oldFile)
    .then(() => true)
    .catch(() => false);
  if (!oldFileExist) {
    throw new Error("FS operation failed(source file doesn't exist)");
  }
  const newFileExist = await fs
    .access(newFile)
    .then(() => true)
    .catch(() => false);

  if (newFileExist) {
    throw new Error("FS operation failed(dest file already exist)");
  }
  if (!oldFileExist || newFileExist) {
    throw new Error("FS operation failed");
  }

  await fs.rename(oldFile, newFile);
};

await rename();
