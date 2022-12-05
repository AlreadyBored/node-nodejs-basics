import { resolve } from "node:path";
import { existsSync } from "node:fs";
import { unlink } from "node:fs/promises";

import { DIR_NAME, FS_ERROR_TEXT } from "./constants.js";

const FILE_NAME = "fileToRemove.txt";

const remove = async () => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", DIR_NAME, FILE_NAME);

  if (!existsSync(path)) throw new Error(FS_ERROR_TEXT);

  await unlink(path);
};

try {
  await remove();
} catch (err) {
  console.error(err);
}
