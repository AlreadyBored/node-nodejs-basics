import { existsSync } from "node:fs";
import { unlink } from "node:fs/promises";
const remove = async () => {
  const sourcePath = "./src/fs/files/fileToRemove.txt";

  if (!existsSync(sourcePath)) {
    throw new Error("FS operation failed");
  }

  try {
    await unlink(sourcePath);
    console.log("File deleted successfully!");
  } catch (err) {
    console.error("Error deleting file:", err.message);
    throw err;
  }
};

await remove();
