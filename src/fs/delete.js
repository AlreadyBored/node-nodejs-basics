import fs from "fs/promises";
import path from "path";

const remove = async () => {
  const filePath = path.join("files", "fileToRemove.txt");

  try {
    await fs.unlink(filePath);
    console.log("File removed successfully");
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
