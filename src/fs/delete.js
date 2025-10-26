import path from "path";
import { unlink } from "fs/promises";
import { getDirName, isExists } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const filePath = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  try {
    const isFileExists = await isExists(filePath);

    if (!isFileExists) {
      throw new Error("FS operation failed: no file to delete!");
    }

    await unlink(filePath);

    console.log("File was successfully deleted!");
  } catch (error) {
    console.error(error);
  }
};

await remove();
