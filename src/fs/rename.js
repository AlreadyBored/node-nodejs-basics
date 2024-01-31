import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let isFileCreated = true;
  let isFileNotExist = false;

  const pathToFileForRename = path.resolve(__dirname, "files", "wrongFilename.txt")
  const pathToNewFileName = path.resolve(__dirname, "files", "properFilename.md")

  await fs
    .readFile(pathToFileForRename)
    .catch(() => (isFileNotExist = true));

  await fs
    .readFile(pathToNewFileName)
    .catch(() => (isFileCreated = false));

  if (!isFileNotExist && !isFileCreated)
    fs.rename(pathToFileForRename, pathToNewFileName);
  else throw new Error("FS operation failed");
};

await rename();
