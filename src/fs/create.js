import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import {
  DIR_NAME,
  FILE_NAME,
  FILE_CONTENT,
  FS_ERROR_TEXT,
} from "./constants.js";

// Don't change signature of pre-written functions (e.g. don't rename them, don't make them synchronous, etc.)
const create = async () => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", DIR_NAME, FILE_NAME);

  if (existsSync(path)) throw new Error(FS_ERROR_TEXT);

  await writeFile(path, FILE_CONTENT);
};

try {
  await create();
} catch (err) {
  console.error(err);
}
