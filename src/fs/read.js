import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const read = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToRead.txt");

  fs.readFile(fullPath, "utf8", (err, contents) => {
    if (err) throw new Error("FS operation failed");
    console.log(contents);
  });
};

await read();
