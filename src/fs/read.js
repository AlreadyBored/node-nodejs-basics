import fs from "fs";
import path from "path";

import { getDirname } from "../helpers/getDirname.js";

const read = async () => {
  const __dirname = getDirname(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToRead.txt");

  fs.readFile(fullPath, "utf8", (err, contents) => {
    if (err) throw new Error("FS operation failed");
    console.log(contents);
  });
};

await read();
