import { readdir, copyFile, mkdir } from "node:fs/promises";
import { ERR_DATA } from "../const/error.js";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files");
const copyPath = makePath(import.meta.url, "/files_copy");

const copy = async () => {
  try {
    await mkdir(copyPath);
    const files = await readdir(path);
    files.forEach(async (file) => {
      await copyFile(`${path}/${file}`, `${copyPath}/${file}`);
    });
  } catch (err) {
    throw new Error(ERR_DATA);
  }
};

copy();
