import { unlink, access } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filesDir = join(__dirname, "files", "fileToRemove.txt");

  try {
    await access(filesDir);
    await unlink(filesDir);
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw new Error("FS operation failed");
  }
};

await remove();
