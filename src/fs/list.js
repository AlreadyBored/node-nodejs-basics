//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#file-system-srcfs

import fsPromises from "node:fs/promises";
import { getURLPath } from "../lib.js";

const list = async () => {
  const folderPath = getURLPath("./fs/files");

  try {
    const files = await fsPromises.readdir(folderPath);
    console.log(files);
  } catch (e) {
    if (e.code === "ENOENT") console.error("FS operation failed");
    else console.error(e.message);
  }
};

await list();
