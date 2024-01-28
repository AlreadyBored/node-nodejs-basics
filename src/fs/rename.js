import fs from "fs/promises";
import path from "path";

const targetFile = "wrongFilename.txt";
const outputFile = "properFilename.md";
const sourceFolder = "files";
const pathTotTargetFile = path.join(process.cwd(), sourceFolder, targetFile);
const pathTotOutputFile = path.join(process.cwd(), sourceFolder, outputFile);

const rename = async () => {
  try {
    const files = await fs.readdir(sourceFolder);

    const isExistTargetFile = files.includes(targetFile);
    const isExistOutputFile = files.includes(outputFile);

    if (isExistTargetFile && !isExistOutputFile) {
      await fs.rename(pathTotTargetFile, pathTotOutputFile);
      console.log("File renamed successfully.");
    } else {
      throw new Error("FS operation failed");
    }
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
