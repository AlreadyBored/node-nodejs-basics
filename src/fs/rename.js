import { existsSync } from "node:fs";
import { rename as fsRename } from "node:fs/promises";
import { resolve } from "node:path";

const FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";

import { DIR_NAME, FS_ERROR_TEXT } from "./constants.js";

const rename = async () => {
  const [_, currentPath] = process.argv;
  const oldPath = resolve(currentPath, "../", DIR_NAME, FILE_NAME);
  const newPath = resolve(currentPath, "../", DIR_NAME, NEW_FILE_NAME);

  if (!existsSync(oldPath) || existsSync(newPath))
    throw new Error(FS_ERROR_TEXT);

  await fsRename(oldPath, newPath);
};

try {
  await rename();
} catch (err) {
  console.error(err);
}
