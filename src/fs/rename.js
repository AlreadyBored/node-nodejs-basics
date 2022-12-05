import * as fs from "fs/promises";
import * as path from "path";

import { exists } from "./supports/exists.js";

const rename = async () => {
  const fileName = "wrongFilename.txt";
  const newFileName = "properFilename.md";
  const fullPath = (fileName) =>
    path.join(process.cwd(), "src", "fs", "files", fileName);

  const oldFullPath = fullPath(fileName);
  const newFullPath = fullPath(newFileName);
  const oldFileIsExists = await exists(oldFullPath);
  const newFileIsExists = await exists(newFullPath);

  try {
    if (oldFileIsExists !== true || newFileIsExists !== false) throw "error";
    fs.rename(oldFullPath, newFullPath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
