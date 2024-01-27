//https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/nodejs-basics/assignment.md#file-system-srcfs

import fsPromises from "node:fs/promises";
import { getURLPath } from "../lib.js";

const rename = async () => {
  const wrongFilePath = getURLPath("./fs/files/wrongFilename.txt");
  const properFilePath = getURLPath("./fs/files/properFilename.md");
  let isExistWrongFile = false;
  let isExistProperFile = false;

  try {
    const [wrongFile, properFile] = await Promise.allSettled([
      fsPromises.access(wrongFilePath),
      fsPromises.access(properFilePath),
    ]);

    isExistWrongFile = wrongFile.status === "fulfilled";
    isExistProperFile = properFile.status === "fulfilled";

    if (isExistWrongFile && !isExistProperFile) {
      try {
        await fsPromises.rename(wrongFilePath, properFilePath);
      } catch (e) {
        console.error(e.message);
      }
    } else {
      throw new Error("FS operation failed");
    }
  } catch (e) {
    console.error(e.message);
  }
};

await rename();
