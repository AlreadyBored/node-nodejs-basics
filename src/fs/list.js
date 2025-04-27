import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  try {
    const dirPath = join(__dirname, "files");
    const files = await readdir(dirPath);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
