import { readdir } from "node:fs/promises";
import { ERR_DATA } from "../const/error.js";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files");

const list = async () => {
  try {
    const files = await readdir(path);
    files.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    throw new Error(ERR_DATA);
  }
};

await list();
