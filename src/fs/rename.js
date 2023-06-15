import { promises as fsPromises } from "fs";
import { join, dirname } from "path";

const rename = async () => {
  // Write your code here
  const currentDir = dirname(new URL(import.meta.url).pathname).replace(
    /^\/([A-Za-z]:)/,
    "$1"
  );
  console.log(currentDir);
  const wrongFileNamePath = join(currentDir, "files", "wrongFilename.txt");
  const properFileNamePath = join(currentDir, "files", "properFilename.md");
  try {
    try {
      await fsPromises.access(properFileNamePath);
      throw new Error("Fs operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }

    try {
      await fsPromises.access(wrongFileNamePath);
      throw new Error("Fs operation failed");
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("Fs operation failed");
      }
    }

    fsPromises.rename(wrongFileNamePath, properFileNamePath);
    console.log("File renamed successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

await rename();
