import { promises as fs } from "fs";
import { join } from "path";

const remove = async () => {
  // Write your code here
  const filePath = join(".", "/files", "fileToRemove.txt");
  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed: file does not exist");
    } else {
      throw err;
    }
  }
};

await remove();
