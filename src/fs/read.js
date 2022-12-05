import { readFile } from "node:fs/promises";
import { ERR_DATA } from "../const/error.js";
import { makePath } from "../utils/makePath.js";

const path = makePath(import.meta.url, "/files/fileToRead.txt");

const read = async () => {
  try {
    const data = await readFile(path, { encoding: "utf-8" });
    console.log(data);
  } catch (err) {
    throw new Error(ERR_DATA);
  }
};

await read();
