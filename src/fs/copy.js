import * as fs from "node:fs/promises";
import { folderPath } from "./create.js";

const parentalFolderPath = import.meta.dirname;

const createFolderPath = parentalFolderPath + "/files_copy";

const copy = async () => {
  try {
    const fsFolderFiles = await fs.readdir(parentalFolderPath);
    const targetFolderFiles = await fs.readdir(folderPath);
    if (
      fsFolderFiles.includes("files_copy") ||
      !fsFolderFiles.includes("files")
    ) {
      throw new Error("FS operation failed");
    } else {
      await fs.mkdir(createFolderPath, (err) => {
        if (err) {
          return console.error(err);
        }
      });
      for (let i = 0; i < targetFolderFiles.length; i++) {
        await fs.copyFile(
          folderPath + `/${targetFolderFiles[i]}`,
          createFolderPath + `/${targetFolderFiles[i]}`,
          0,
          (err) => {
            if (err) {
              console.log(err);
            }
          }
        );
      }
    }
  } catch (error) {
    console.log(error);
  }
};

await copy();
