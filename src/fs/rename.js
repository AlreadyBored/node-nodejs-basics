import fs from "fs";
import { ERROR_FS } from "../constants.js";
import { isFileExist } from "../shared.js";

const rename = async () => {
  // Write your code here
  const oldFile = "./src/fs/files/wrongFilename.txt";
  const newFile = "./src/fs/files/properFilename.md";

  if (!(await isFileExist(oldFile)) || (await isFileExist(newFile)))
    throw Error(ERROR_FS);
  else {
    fs.rename(oldFile, newFile, (err) => {
      if (err) throw err; // newFile is a directory
    });
  }
};

await rename();
