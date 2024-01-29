import { promises as fs } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw err;
    }
  }
};

await remove();
