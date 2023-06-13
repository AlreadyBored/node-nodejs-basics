import url from "url";
import fs from "fs";
import getPath from "../helper/getPath.js";

const read = async (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error !== null) {
        return reject("FS operation failed");
      }

      resolve(data);
    });
  });
};

if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  const readFile = getPath(import.meta, "files", "fileToRead.txt");
  await read(readFile).then(console.log);
}

export default read;
