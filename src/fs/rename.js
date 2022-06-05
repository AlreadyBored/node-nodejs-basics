import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
  const path = __dirname + "/files/wrongFilename.txt";
  console.log(path);
  const newPath = __dirname + "/files/properFilename.md";
  console.log(newPath);
  fs.exists(path, (exists) => {
    if (!exists) throw new Error("FS operation failed");
    fs.exists(newPath, (exists) => {
      if (exists) throw new Error("FS operation failed");

      fs.rename(path, newPath, (err) => {
        console.log(err);
        console.log("Done!");
      });
    });
  });
};

rename();
