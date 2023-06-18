import { readdir } from "fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const folderPath = join(__dirname, "files");

  try {
    const files = await readdir(folderPath);
    for (const file of files) console.log(file);
  } catch {
    throw "FS operation failed";
  }
};

await list();
