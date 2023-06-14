import { readFile } from "fs/promises";
import * as Utils from "./utils.js";

const read = async () => {
  const fileToRead = "./src/fs/files/fileToRead.txt";
  const fileExist = await Utils.isFileExist(fileToRead);
  if (!fileExist) {
    throw new Error("FS operation failed");
  } else {
    const fileContent = await readFile(fileToRead, "utf8");
    console.log(fileContent);
  }
};

await read();
