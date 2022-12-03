import fs from "fs";
import path from "path";

import { getDirname } from "../helpers/getDirname.js";

const remove = async () => {
  const __dirname = getDirname(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToRemove.txt");

  fs.rm(fullPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
