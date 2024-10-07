import { promises as fs } from "fs";
import path from "path";

const remove = async () => {
  const filePath = path.join("src", "fs", "files", "fileToRemove.txt");

  try {
    await fs.access(filePath);
  } catch (error) {
    throw new Error("FS operation failed");
  }
  await fs.rm(filePath);
  console.log("File removed successfully!");
};

await remove();
