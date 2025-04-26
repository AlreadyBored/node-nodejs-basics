import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_MESSAGE = "FS operation failed";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const existedFile = "wrongFilename.txt";
  const newFile = "properFilename.md";
  const oldPath = path.join(__dirname, "files", existedFile);
  const newPath = path.join(__dirname, "files", newFile);

  if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
    throw new Error(ERROR_MESSAGE);
  }
  fs.promises.rename(oldPath, newPath);
};

await rename();
