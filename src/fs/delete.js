import fs from "fs";
import getPath from "../helper/getPath.js";

const remove = async (filePath) => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (error) => {
      if (error !== null) {
        return reject("FS operation failed");
      }

      resolve();
    });
  });
};

const removeFile = getPath(import.meta, "files", "fileToRemove.txt");
await remove(removeFile);
