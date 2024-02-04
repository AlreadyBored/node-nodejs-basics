import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const remove = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const fileToDeletePath = path.join(folderPath, "fileToRemove.txt");
  try {
    await fs.rm(fileToDeletePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
