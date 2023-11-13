import path from "path";
import fs from "fs/promises";

const remove = async () => {
  const currentDir = path.resolve("src", "fs");
  const fileName = "fileToRemove.txt";
  const filePath = path.join(currentDir, "files", fileName);

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await remove();
