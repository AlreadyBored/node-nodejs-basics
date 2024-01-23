// Implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import fsPromises from "node:fs/promises";
import { getURLPath } from "./lib.js";

const list = async () => {
  const folderPath = getURLPath("./files");

  try {
    const files = await fsPromises.readdir(folderPath);
    console.log(files);
  } catch (e) {
    if (e.code === "ENOENT") console.error("FS operation failed");
    else console.error(e.message);
  }
};

await list();
