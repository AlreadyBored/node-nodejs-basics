import path from "path";
import { cp } from "fs/promises";
import { getDirName, isExists } from "../utils.js";

const __dirname = getDirName(import.meta.url);
const oldPath = path.join(__dirname, "files");
const newPath = path.join(__dirname, "files_copy");

const copy = async () => {
  try {
    const isOldPathExists = await isExists(oldPath);
    const isNewPathExists = await isExists(newPath);

    if (!isOldPathExists) {
      throw new Error("FS operation failed: no folder to copy!");
    }

    if (isNewPathExists) {
      throw new Error(
        "FS operation failed: folder 'files_copy' already exists!"
      );
    }

    await cp(oldPath, newPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });

    console.log("Directory was successfully copied!");
  } catch (error) {
    console.error(error);
  }
};

await copy();
