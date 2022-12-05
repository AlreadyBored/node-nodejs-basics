import { existsSync } from "node:fs";
import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

import { DIR_NAME, FS_ERROR_TEXT } from "./constants.js";

const list = async () => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", DIR_NAME);

  if (!existsSync(path)) throw new Error(FS_ERROR_TEXT);

  const files = await readdir(path);

  console.log(files);
};

try {
  await list();
} catch (err) {
  console.error(err);
}
