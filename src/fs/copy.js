import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const copy = async () => {
  // Write your code here
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const folderPath = path.join(__dirname, "files");
  const folderDest = path.join(__dirname, "files_copy");
  if (fs.existsSync(folderDest) || !fs.existsSync(folderPath)) {
    throw new Error("FS operation failed");
  } else {
    fs.cp(folderPath, folderDest, {recursive: true}, () => {
      console.log("Copied " + folderPath);
    });
  }
};

await copy();
