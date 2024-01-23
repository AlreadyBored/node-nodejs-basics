//Implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import fsPromises from "node:fs/promises";
import { getURLPath } from "./lib.js";

const remove = async () => {
  const pahtToFile = getURLPath("./files/fileToRemove.txt");
  try {
    await fsPromises.rm(pahtToFile);
  } catch (e) {
    if (e.code === "ENOENT") console.error("FS operation failed");
    else console.error(e.message);
  }
};

await remove();
