import fs from "fs";
import { ERROR_FS } from "../constants.js";
import { isFileExist } from "../shared.js";

const copy = async () => {
  // Write your code here
  const copy = "./src/fs/files_copy";
  const src = "./src/fs/files";

  if (!(await isFileExist(src)) || (await isFileExist(copy)))
    throw Error(ERROR_FS);
  else {
    fs.cp(src, copy, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }
};

await copy();
