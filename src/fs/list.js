import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  const filesPath = __dirname + "/files";

  fs.exists(filesPath, (exist) => {
    if (!exist) throw new Error("FS operation failed");

    fs.readdir(filesPath, (err, files) => {
      if (err) {
        throw err;
      }

      files.forEach((file) => {
        console.log(file);
      });
    });
  });
};

list();
