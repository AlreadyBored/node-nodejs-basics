import fs from "node:fs/promises";
import path from "node:path";

// delete.js - implement function that deletes file fileToRemove.txt
// (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

const remove = async () => {
  // Write your code here

  try {
    await fs.rm(
      path.resolve(process.cwd(), "src", "fs", "files", "fileToRemove.txt")
    );
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await remove();
