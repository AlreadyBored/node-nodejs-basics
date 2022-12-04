import { rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const remove = async () => {
  try {
    await rm(join(__dirname, "files/fileToRemove.txt"));
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
