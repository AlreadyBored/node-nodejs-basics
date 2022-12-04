import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

import {
  DIR_NAME,
  FILE_NAME,
  FILE_CONTENT,
  FS_ERROR_TEXT,
} from "./constants.js";

const create = async () => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", DIR_NAME, FILE_NAME);

  if (existsSync(path)) throw new Error(FS_ERROR_TEXT);

  writeFile(path, FILE_CONTENT);
};

try {
  await create();
} catch (err) {
  console.error(err);
}
