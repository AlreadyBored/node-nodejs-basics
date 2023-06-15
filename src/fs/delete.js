import { promises as fsPromises } from "fs";
import { join, dirname } from "path";

const remove = async () => {
  const currentDir = dirname(new URL(import.meta.url).pathname).replace(
    /^\/([A-Za-z]:)/,
    "$1"
  );
  const filePath = join(currentDir, "files", "fileToRemove.txt");
  try {
    await fsPromises.access(filePath);

    await fsPromises.unlink(filePath);
    console.log("File deleted successfully!");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    }
    console.error("Error:", error.message);
  }
  // Write your code here
};

await remove();
