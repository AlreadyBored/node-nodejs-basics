import fs from "fs";
import path from "path";

import { getPath } from "../helpers/getPath.js";

const remove = async () => {
  const { __dirname } = getPath(import.meta.url);
  const fullPath = path.join(__dirname, "/files", "fileToRemove.txt");

  fs.rm(fullPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
