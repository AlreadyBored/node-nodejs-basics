import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { unlink } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const fileToRemove = "fileToRemove.txt";
  const fileToRemoved = `${__dirname}/files/${fileToRemove}`;

  try {
    await unlink(fileToRemoved);
  } catch (error) {
    console.error("FS operation failed");
  }
};

await remove();
