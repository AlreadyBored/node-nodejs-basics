import fsPromises from "node:fs/promises";
import { ERR_DATA } from "../const/error.js";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "files/wrongFilename.txt");
const renamePath = makePath(import.meta.url, "files/properFilename.md");

const rename = async () => {
  try {
    await fsPromises.rename(path, renamePath);
  } catch (err) {
    throw new Error(ERR_DATA);
  }
};

await rename();
