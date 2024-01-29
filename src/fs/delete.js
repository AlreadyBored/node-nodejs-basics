import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const remove = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const fileToDeletePath = path.join(folderPath, "fileToRemove.txt");
  if (!fs.existsSync(fileToDeletePath)) {
    throw new Error("FS operation failed: File does not exist");
  } else {
    fs.unlinkSync(fileToDeletePath);
  }
};

await remove();
