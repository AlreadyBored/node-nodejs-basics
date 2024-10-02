import fs from "fs";
import { ERROR_FS } from "../constants.js";
import { isFileExist } from "../shared.js";

const remove = async () => {
  // Write your code here
  const fileToRemove = "./src/fs/files/fileToRemove.txt";

  if (!(await isFileExist(fileToRemove)))
    throw Error(ERROR_FS); // file doesn't exist
  else {
    fs.rm(fileToRemove, (err) => {
      if (err) throw err;
    });
  }
};

await remove();
