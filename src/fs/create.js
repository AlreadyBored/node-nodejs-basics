import fs from "fs";
import getPath from "../helper/getPath.js";

const filePath = getPath(import.meta, "files", "fresh.txt");

const create = async () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, "I am fresh and young", (error) => {
      if (error !== null) {
        return reject("FS operation failed");
      }

      resolve();
    });
  });
};

await create();
