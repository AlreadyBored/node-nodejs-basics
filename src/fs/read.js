import { promises as fsPromises } from "fs";
import { join } from "path";
import { currentDir } from "./findCurrentDir.js";

const read = async () => {
  const filePath = join(currentDir, "files", "fileToRead.txt");

  try {
    try {
      await fsPromises.access(filePath);
      const text = await fsPromises.readFile(filePath, { encoding: "utf8" });
      console.log(text);
    } catch (error) {
      if (error.code === "ENOENT") {
        throw new Error("Fs operation failed");
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
  // Write your code here
};

await read();
