import { existsSync } from "node:fs";
import { rm } from "node:fs/promises";

const remove = async () => {
    // Write your code here
  const __basicsDir = new URL(".", import.meta.url).pathname;
  const targetFile = `${__basicsDir}files_copy/fileToRemove.txt`;

  try {
    if (!existsSync(targetFile)) throw Error('FS operation failed');

    await rm(targetFile);
  } catch (e) {
    console.error(e);
  }
};

await remove();