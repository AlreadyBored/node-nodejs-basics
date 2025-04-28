import { access, rename as renameFile } from "node:fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldPath = join(__dirname, "files", "wrongFilename.txt");
const newPath = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    await access(oldPath);

    try {
      await access(newPath);
      throw new Error("FS operation failed");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw new Error("FS operation failed");
      }
    }

    await renameFile(oldPath, newPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
