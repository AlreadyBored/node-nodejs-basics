import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const folderPath = join(__dirname, "files");

  try {
    const files = await readdir(folderPath);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
