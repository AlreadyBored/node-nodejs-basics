import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const rename = async () => {
  const { __dirname } = getPath(import.meta.url);
  const oldPath = path.join(__dirname, "/files/wrongFilename.txt");
  const newPath = path.join(__dirname, "/files/properFilename.md");

  fs.rename(oldPath, newPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
