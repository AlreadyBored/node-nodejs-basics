import path from "node:path";
import { readdir } from "node:fs/promises";

const dirname = import.meta.dirname;

const list = async () => {
  const dirPath = path.join(dirname, "files");

  try {
    const files = await readdir(dirPath);

    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();

