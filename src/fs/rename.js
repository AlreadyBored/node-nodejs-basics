import { promises as fs } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const oldPath = join(__dirname, "files", "wrongFilename.txt");
  const newPath = join(__dirname, "files", "properFilename.md");

  try {
    await fs.access(oldPath);
    await fs.access(newPath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      if (err.path === oldPath) {
        throw new Error("FS operation failed");
      } else {
        await fs.rename(oldPath, newPath);
      }
    } else {
      throw err;
    }
  }
};

await rename();
