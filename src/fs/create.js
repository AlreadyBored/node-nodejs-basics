import { promises as fsPromises } from "fs";
import { join } from "path";
import { currentDir } from "./findCurrentDir.js";

const create = async () => {
  const filePath = join(currentDir, "files", "fresh.txt");
  try {
    try {
      await fsPromises.access(filePath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
    }
    await fsPromises.writeFile(filePath, "I am fresh and young");
    console.log("Fresh file created successfully!");
  } catch (error) {
    console.error(error.message);
  }
};

await create();
