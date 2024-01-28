// implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, "files", "fileToRemove.txt");

  try {
    await fs.access(filePath); // Check if file exists
    await fs.unlink(filePath); // Delete the file
  } catch (error) {
    // If the file does not exist, throw an error
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      // Re-throw the error if it's a different type
      throw error;
    }
  }
};

await remove();
