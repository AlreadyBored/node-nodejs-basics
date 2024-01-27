//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#file-system-srcfs

import fsPromises from "node:fs/promises";
import { getURLPath } from "../lib.js";

const create = async () => {
  const pahtToFile = getURLPath("./fs/files/fresh.txt");
  let isExistFile = true;
  try {
    if (!(await fsPromises.access(pahtToFile)))
      throw new Error("FS operation failed");
  } catch (e) {
    if (e.code === "ENOENT") isExistFile = false;
    console.error(e.message);
  }

  try {
    if (!isExistFile)
      await fsPromises.appendFile(pahtToFile, "I am fresh and young");
  } catch (e) {
    console.error(e.message);
  }
};

await create();
