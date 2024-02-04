import fs from "fs/promises";
import path from "path";
import {fileURLToPath} from "url";

const rename = async () => {
  // Write your code here
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folderPath = path.join(__dirname, "files");
    const wrongFilePath = path.join(folderPath, "wrongFilename.txt");
    const properFilePath = path.join(folderPath, "extension.md");
    await fs.rename(wrongFilePath, properFilePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
