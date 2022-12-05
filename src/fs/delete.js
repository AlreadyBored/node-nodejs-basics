import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    await fsPromises.rm(src);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await remove();
