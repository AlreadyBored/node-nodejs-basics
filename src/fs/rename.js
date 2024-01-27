import { promises as fs } from "fs";
import { fileExists, getDirName } from "../utils/utils.js";

const rename = async () => {
  const oldFilePath = getDirName(import.meta.url) + "/files/wrongFilename.txt";
  const newFilePath = getDirName(import.meta.url) + "/files/properFilename.md";

  const oldFileExists = await fileExists(oldFilePath);

  try {
    if (oldFileExists) {
      await fs.rename(oldFilePath, newFilePath);
    } else {
        throw new Error("FS operation failed");
    }
  } catch (err) {
    console.log(err);
  }

};

await rename();
