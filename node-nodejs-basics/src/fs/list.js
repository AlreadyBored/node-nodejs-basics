import path from "path";
import fs from "fs/promises";

const list = async () => {
  const currentDir = path.resolve("src", "fs");
  const folderName = "files";
  const folderPath = path.join(currentDir, folderName);

  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);

    if (files.length > 0) {
      console.log("List of filenames:");
      files.forEach((fileName) => {
        console.log(fileName);
      });
    } else {
      console.log("No files in the folder.");
    }
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await list();
