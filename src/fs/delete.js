import { promises as fs } from "fs";

const remove = async () => {
  const filePath = "src/fs/files/fileToRemove.txt";
  try {
    await fs.unlink(filePath);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    throw error;
  }
};

await remove();
