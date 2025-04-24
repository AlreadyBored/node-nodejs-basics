import { promises as fs } from "fs";

const remove = async () => {
  const fileToDelete = "files/fileToRemove.txt";

  try {
    try {
      await fs.access(fileToDelete);
    } catch (error) {
      throw new Error("FS operation failed");
    }

    await fs.unlink(fileToDelete);
  } catch (error) {
    throw error;
  }
};

await remove();
