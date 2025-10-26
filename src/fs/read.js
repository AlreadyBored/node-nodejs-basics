import path from "path";
import { readFile } from "fs/promises";
import { getDirName, isExists } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  try {
    const isFileExists = await isExists(filePath);

    if (!isFileExists) {
      throw new Error("FS operation failed: no file to read!");
    }

    const content = await readFile(filePath, { encoding: "utf-8" });

    console.log(content);
  } catch (error) {
    console.error(error);
  }
};

await read();
