import fs from "fs";
import path from "path";

import { getDirname } from "../helpers/getDirname.js";

const rename = async () => {
  const __dirname = getDirname(import.meta.url);
  const oldPath = path.join(__dirname, "/files/wrongFilename.txt");
  const newPath = path.join(__dirname, "/files/properFilename.md");

  fs.rename(oldPath, newPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
