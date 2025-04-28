import { readdir } from "node:fs/promises";
import { join } from "node:path";

const dirname = import.meta.dirname;

const list = async () => {
  const folderPath = join(dirname, "files");

  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
