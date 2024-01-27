//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#file-system-srcfs

import fsPromises from "node:fs/promises";
import { getURLPath } from "../lib.js";

const remove = async () => {
  const pahtToFile = getURLPath("./fs/files/fileToRemove.txt");
  try {
    await fsPromises.rm(pahtToFile);
  } catch (e) {
    if (e.code === "ENOENT") console.error("FS operation failed");
    else console.error(e.message);
  }
};

await remove();
