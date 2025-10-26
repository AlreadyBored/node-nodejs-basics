import path from "path";
import { readdir } from "fs/promises";
import { getDirName, isExists } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const dirPath = path.join(__dirname, "files");

const list = async () => {
  try {
    const isDirExists = await isExists(dirPath);

    if (!isDirExists) {
      throw new Error("FS operation failed: no folder to read!");
    }

    const files = await readdir(dirPath);

    console.log(files);
  } catch (error) {
    console.error(error);
  }
};

await list();
