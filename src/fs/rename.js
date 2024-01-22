import fs from "fs";
import getPath from "../helper/getPath.js";

const rename = async (fileFrom, fileTo) => {
  return new Promise((resolve, reject) => {
    fs.rename(fileFrom, fileTo, (error) => {
      if (error !== null) {
        return reject("FS operation failed");
      }

      resolve();
    });
  });
};

const wrongFile = getPath(import.meta, "files", "wrongFilename.txt");
const properFile = getPath(import.meta, "files", "properFilename.md");
await rename(wrongFile, properFile);
