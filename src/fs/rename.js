import * as fs from "node:fs/promises";
import { folderPath } from "./create.js";

const filePath = folderPath + "/wrongFilename.txt";
const renamedFilePath = folderPath + "/properFilename.md";

const rename = async () => {
  try {
    const files = await fs.readdir(folderPath);
    if (
      files.includes("properFilename.md") ||
      !files.includes("wrongFilename.txt")
    ) {
      throw new Error("FS operation failed");
    } else {
      await fs.rename(filePath, renamedFilePath);
    }
  } catch (error) {
    console.log(error);
  }
};

await rename();
