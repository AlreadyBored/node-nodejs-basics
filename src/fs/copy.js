import fs from "fs";
import path from "path";
import { promisify } from "util";

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const copyFile = promisify(fs.copyFile);

const copy = async () => {
  const sourceFolderToCopy = "./src/fs/files";
  const copyingFolder = "./src/fs/files_copy";

  try {
    const srcStats = await stat(sourceFolderToCopy);

    if (!srcStats.isDirectory()) {
      throw new Error("FS operation failed");
    }

    try {
      const destStats = await stat(copyingFolder);

      if (destStats.isDirectory()) {
        throw new Error("FS operation failed");
      }
    } catch (destError) {
      if (destError.code !== "ENOENT") {
        throw destError;
      }

      await mkdir(copyingFolder);
    }

    const files = await readdir(sourceFolderToCopy);

    for (const file of files) {
      const srcPath = path.join(sourceFolderToCopy, file);
      const destPath = path.join(copyingFolder, file);

      const fileStats = await stat(srcPath);

      if (fileStats.isDirectory()) {
        await copy(srcPath, destPath);
      } else {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await copy();
