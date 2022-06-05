import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcPath = path.join(__dirname, "files");
const destPath = path.join(__dirname, "files_copy");
export const copy = async (srcFolder, destFolder) => {
  try {
    const files = await fs.readdir(srcFolder);

    await fs.mkdir(destFolder);

    for (const file of files) {
      const oldFile = path.join(srcFolder, file);
      const newFile = path.join(destFolder, file);
      const stat = await fs.stat(oldFile);

      if (stat.isFile()) {
        await fs.copyFile(oldFile, newFile);
      } else {
        await copy(oldFile, newFile);
      }
    }
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "EEXIST") {
      throw Error("FS operation failed");
    }
    throw Error(error);
  }
};

await copy(srcPath, destPath);
