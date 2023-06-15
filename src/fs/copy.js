import { promises as fsPromises } from "fs";
import { join } from "path";
import { currentDir } from "./findCurrentDir.js";

const copy = async () => {
  // Write your code here
  const destinationDir = join(currentDir, "files_copy");
  const sourceDir = join(currentDir, "files");
  try {
    const sourceExists = await fsPromises.stat(sourceDir).catch(() => false);
    if (!sourceExists || !sourceExists.isDirectory()) {
      throw new Error("Fs operation failed");
    }

    const destinationDirExists = await fsPromises
      .stat(destinationDir)
      .catch(() => false);
    if (destinationDirExists && destinationDirExists.isDirectory()) {
      throw new Error("Fs operation failed");
    }

    await fsPromises.mkdir(destinationDir);

    const files = await fsPromises.readdir(sourceDir);
    for (let file of files) {
      const sourceFilePaht = join(sourceDir, file);
      const destionationFilePath = join(destinationDir, file);
      await fsPromises.copyFile(sourceFilePaht, destionationFilePath);
    }

    console.log("Folder files copied successfully to files_copy!");
  } catch (error) {
    console.error("Error:", error.message);
  }
};

await copy();
