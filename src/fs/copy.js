import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const copy = async () => {
  // Write your code here
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, "files");
    const folderDest = path.join(__dirname, "files_copy");
    await fs.mkdir(folderDest);
    const files = await fs.readdir(folderPath);
    for (const file of files) {
      const sourceFile = path.join(folderPath, file);
      const destFile = path.join(folderDest, file);
      await fs.copyFile(sourceFile, destFile);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await copy();
