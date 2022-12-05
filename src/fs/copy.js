import * as fs from "fs/promises";
import * as path from "path";

import { exists } from "./supports/exists.js";

const copy = async () => {
  const currFolder = "files";
  const destFolder = "files_copy";

  const fullPath = (folderName) =>
    path.join(process.cwd(), "src", "fs", folderName);

  const currPath = fullPath(currFolder);
  const destPath = fullPath(destFolder);

  const isExistsCurrFolder = await exists(currPath);
  const isExistsDestFolder = await exists(destPath);

  try {
    if (isExistsCurrFolder !== true || isExistsDestFolder !== false)
      throw "error";

    await fs.mkdir(destPath);
    const files = await fs.readdir(currPath);
    files.forEach(async (file) => {
      const currFilePath = path.join(currPath, file);
      const destFilePath = path.join(destPath, file);
      await fs.copyFile(currFilePath, destFilePath);
    });
  } catch {
    throw new Error("FS operation failed");
  }
};

copy();
