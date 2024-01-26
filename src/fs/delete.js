import fs from "node:fs/promises";
import path from "path";
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToRemove = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fs.unlink(pathToRemove);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();