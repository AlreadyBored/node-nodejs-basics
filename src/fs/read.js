import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { DIR_NAME, FS_ERROR_TEXT } from "./constants.js";

const FILE_NAME = "fileToRead.txt";

const read = async () => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", DIR_NAME, FILE_NAME);

  if (!existsSync(path)) throw new Error(FS_ERROR_TEXT);

  const contents = await readFile(path, { encoding: "utf8" });
  console.log(contents);
};

try {
  await read();
} catch (err) {
  console.error(err);
}
