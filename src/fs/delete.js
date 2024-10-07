import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const remove = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourceFile = path.join(__dirname, "files", "fileToRemove.txt");
  const isSourceFileExists = fs.existsSync(sourceFile);
  if (isSourceFileExists) {
    fs.unlinkSync(sourceFile);
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
