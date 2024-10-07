import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const list = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const sourcePath = path.join(__dirname, "files");
  const isSourceFolderExists = fs.existsSync(sourcePath);
  if (!isSourceFolderExists) {
    throw new Error("FS operation failed");
  } else {
    const files = fs.readdirSync(sourcePath);
    files.forEach((file) => {
      console.log(file);
    });
  }
};

await list();
