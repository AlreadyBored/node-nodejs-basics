import { promises as fs } from "fs";
import { join } from "path";

const rename = async () => {
  // Write your code here
  const oldFilePath = join(".", "/files", "wrongFilename.txt");
  const newFilePath = join(".", "properFilename.md");
  try {
    await fs.access(oldFilePath);
    try {
      await fs.access(newFilePath);
      throw new Error("FS operation failed: new file already exists");
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
      await fs.rename(oldFilePath, newFilePath);
    }
  } catch (err) {
    throw new Error("FS operation failed: old file does not exist");
  }
};

await rename();
