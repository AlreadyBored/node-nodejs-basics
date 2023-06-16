import { promises as fsPromises } from "fs";
import { join } from "path";
import { currentDir } from "./findCurrentDir.js";

const list = async () => {
  const filesPath = join(currentDir, "files");
  try {
    try {
      await fsPromises.access(filesPath);
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("Fs operation failed");
      }
    }
    const files = await fsPromises.readdir(filesPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  // Write your code here
};

await list();
