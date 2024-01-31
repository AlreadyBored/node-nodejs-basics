import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  let isFolderExists = true;
  const pathToFolder = path.resolve(__dirname, "files")

  await fs.access(pathToFolder).catch(() => (isFolderExists = false));

  if (!isFolderExists) throw new Error("FS operation failed");

  await fs.readdir(pathToFolder).then((data) => console.log(data));
};

await list();
