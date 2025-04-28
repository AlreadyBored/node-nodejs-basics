import { access, readdir } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dirFiles = join(__dirname, "files");

const list = async () => {
  try {
    await access(dirFiles);
    const files = await readdir(dirFiles);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
