import { readdir } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;
const folderPath = join(dirname, "files");

const list = async () => {
  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
