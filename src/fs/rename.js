import { access } from "node:fs/promises";
import fs from "node:fs";

const rename = async () => {
  const renameFile = (oldFile, newFile) => {
    fs.rename(oldFile, newFile, (err) => {
      if (err) {
        throw err;
      }
    });
  };

  let oldPathExists = false;

  const oldPath = new URL("./files/wrongFilename.txt", import.meta.url);
  const newPath = new URL("./files/properFilename.md", import.meta.url);

  try {
    await access(oldPath);

    oldPathExists = true;

    await access(newPath);
  } catch {
    if (oldPathExists) {
      return renameFile(oldPath, newPath);
    }
  }

  throw new Error("FS operation failed");
};

await rename();
