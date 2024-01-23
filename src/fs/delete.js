import { promises as fsPromises } from "fs";
import { join } from "path";
import { currentDir } from "./findCurrentDir.js";

const remove = async () => {
  const filePath = join(currentDir, "files", "fileToRemove.txt");
  try {
    try {
      await fsPromises.access(filePath);

      await fsPromises.unlink(filePath);
      console.log("File deleted successfully!");
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("FS operation failed");
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
  }

  // Write your code here
};

await remove();
