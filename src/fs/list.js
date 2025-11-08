import { readdir, access } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const dir = path.join(__dirname, "files");
  const dirPath = path.join(dir);

  try {
    await access(dirPath, constants.F_OK);
    const files = await readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
