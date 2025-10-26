import path from "path";
import { rename as renameFile } from "fs/promises";
import { getDirName, isExists } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const oldFilePath = path.join(__dirname, "files", "wrongFilename.txt");
const newFilePath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  try {
    const isOldFileExists = await isExists(oldFilePath);
    const isNewFileExists = await isExists(newFilePath);

    if (!isOldFileExists) {
      throw new Error("FS operation failed: no file to rename!");
    }

    if (isNewFileExists) {
      throw new Error(
        "FS operation failed: file 'properFilename.md' already exists!"
      );
    }

    await renameFile(oldFilePath, newFilePath);

    console.log("File was successfully renamed!");
  } catch (error) {
    console.error(error);
  }
};

await rename();
