import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ERROR_MESSAGE = "FS operation failed";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToRemove = "fileToRemove.txt";
  const dirPath = path.join(__dirname, "files", fileToRemove);

  if (!fs.existsSync(dirPath)) {
    throw new Error(ERROR_MESSAGE);
  }
  await fs.promises.rm(dirPath);
};

await remove();
