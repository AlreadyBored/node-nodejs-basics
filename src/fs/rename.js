// Implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
import fsPromises from "node:fs/promises";
import { getURLPath } from "./lib.js";

const rename = async () => {
  const wrongFilePath = getURLPath("./files/wrongFilename.txt");
  const properFilePath = getURLPath("./files/properFilename.md");
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
