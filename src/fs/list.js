import fs from "fs";
import path from "path";

import { getDirname } from "../helpers/getDirname.js";

const list = async () => {
  const __dirname = getDirname(import.meta.url);
  const fullPath = path.join(__dirname, "/files");

  fs.readdir(fullPath, (err, files) => {
    if (err) throw new Error("FS operation failed");

    files.forEach((item) => {
      console.log(item);
    });
  });
};

await list();
