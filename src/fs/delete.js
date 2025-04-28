import { unlink } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileToRemove = join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  await unlink(fileToRemove).catch((err) => {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    }

    throw error;
  });
};

await remove();
