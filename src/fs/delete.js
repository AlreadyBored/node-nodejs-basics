import { rm } from "node:fs/promises";
import { ERR_DATA } from "../const/error.js";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "files/fileToRemove.txt");

const remove = async () => {
  try {
    await rm(path);
  } catch (err) {
    throw new Error(ERR_DATA);
  }
};

await remove();
