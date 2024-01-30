import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  try {
    await fs.rm(join(__dirname, "files", "fileToRemove.txt"));
  } catch (error) {
    console.error(new Error("FS operation failed"));
  }
};

await remove();
