import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let isFileExists = true;
  const pathToFile = path.resolve(__dirname, "files", "fileToRemove.txt")

  await fs
    .readFile(pathToFile)
    .catch(() => (isFileExists = false));

  if (!isFileExists) throw new Error("FS operation failed");

  fs.rm(pathToFile);
};

await remove();
