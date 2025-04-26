import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_MESSAGE = "FS operation failed";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesDirPath = path.join(__dirname, "files");

  if (!fs.existsSync(filesDirPath)) {
    throw new Error(ERROR_MESSAGE);
  }

  const newDirPath = path.join(__dirname, "files_copy");

  if (fs.existsSync(newDirPath)) {
    throw new Error(ERROR_MESSAGE);
  }

  fs.mkdirSync(newDirPath);
  const files = await fs.promises.readdir(filesDirPath);

  files.forEach((file) => {
    const filePath = path.join(filesDirPath, file);
    const newFilePath = path.join(newDirPath, file);
    fs.copyFileSync(filePath, newFilePath);
  });
};

await copy();
