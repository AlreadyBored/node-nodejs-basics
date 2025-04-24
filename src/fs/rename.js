import fs from "node:fs/promises";
import path from "node:path";

const dirname = import.meta.dirname;

const rename = async () => {
  const oldFilePath = path.join(dirname, "files", "wrongFilename.txt");
  const newFilePath = path.join(dirname, "files", "properFilename.md");

  try {
    try {
      await fs.access(newFilePath);

      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    await fs.rename(oldFilePath, newFilePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();

