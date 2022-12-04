import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const DIR_NAME = "files";
const FILE_NAME = "fresh.txt";
const FILE_CONTENT = "I am fresh and young";

const create = async (
  dirName = DIR_NAME,
  fileName = FILE_NAME,
  data = FILE_CONTENT
) => {
  const [_, currentPath] = process.argv;
  const path = resolve(currentPath, "../", dirName, fileName);

  if (existsSync(path)) throw new Error("FS operation failed");

  writeFile(path, data);
};

try {
  await create();
} catch (e) {
  console.log(e);
}
