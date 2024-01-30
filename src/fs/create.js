import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let isFileExist = true;

  await fs
    .readFile(path.resolve(__dirname, "files", "fresh.txt"))
    .catch(() => (isFileExist = false));

  if (!isFileExist)
    fs.appendFile(
      path.resolve(__dirname, "files", "fresh.txt"),
      "I am fresh and young"
    );
  else throw new Error("FS operation failed");
};

await create();
