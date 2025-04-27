import { rename as renameFile, access, constants } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const fileExists = async (path) =>
  access(path, constants.F_OK)
    .then(() => true)
    .catch(() => false);

const rename = async () => {
  try {
    const oldPath = join(__dirname, "files", "wrongFilename.txt");
    const newPath = join(__dirname, "files", "properFilename.md");

    if (await fileExists(newPath)) {
      throw new Error("FS operation failed");
    }

    await renameFile(oldPath, newPath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await rename();
