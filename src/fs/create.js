import fs from "fs";
import getPath from "../helper/getPath.js";

const create = async (filePath, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, (error) => {
      if (error !== null) {
        return reject("FS operation failed");
      }

      resolve();
    });
  });
};

const freshPath = getPath(import.meta, "files", "fresh.txt");
await create(freshPath, "I am fresh and young");
