import fs from "fs/promises";
import path from "path";

const pathToDelete = path.resolve("src", "fs", "files", "fileToRemove.txt");

const remove = async () => {
  // Write your code here
  try {
    await fs.unlink(pathToDelete);
  } 
  catch {
    throw new Error("FS operation failed");
  }
};

await remove();
