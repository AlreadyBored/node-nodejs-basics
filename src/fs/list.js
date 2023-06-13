import { readdir, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const filesDir = join(__dirname, "files");

  try {
    await access(filesDir);
    const files = await readdir(filesDir);
    console.log(files);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await list();
