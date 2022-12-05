import { existsSync } from "node:fs";
import { mkdir, readdir, copyFile, constants } from "node:fs/promises";
import { resolve } from "node:path";

import { DIR_NAME, COPY_DIR_NAME, FS_ERROR_TEXT } from "./constants.js";

const copy = async () => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", DIR_NAME);
  const newPath = resolve(currentPath, "../", COPY_DIR_NAME);

  if (!existsSync(path) || existsSync(newPath)) throw new Error(FS_ERROR_TEXT);

  const createDir = await mkdir(newPath);
  const files = await readdir(path);

  for (const file of files) {
    const filePath = resolve(currentPath, "../", DIR_NAME, file);
    const newFilePath = resolve(currentPath, "../", COPY_DIR_NAME, file);

    await copyFile(filePath, newFilePath, constants.COPYFILE_EXCL);
  }
};

try {
  await copy();
} catch (e) {
  console.error(e);
}
