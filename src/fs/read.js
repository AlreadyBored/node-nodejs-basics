import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let isFileExists = true;
  const pathToFile = path.resolve(__dirname, "files", "fileToRead.txt")

  await fs
    .readFile(pathToFile)
    .then((data) => console.log(data.toString()))
    .catch(() => (isFileExists = false));

  if (!isFileExists) throw new Error("FS operation failed");
};

await read();
