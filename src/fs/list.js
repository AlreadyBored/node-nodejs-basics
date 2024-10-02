import fs from "fs";
import { ERROR_FS } from "../constants.js";
import { isFileExist } from "../shared.js";

const list = async () => {
  // Write your code here
  const filesDir = "./src/fs/files";

  if (!(await isFileExist(filesDir))) throw Error(ERROR_FS);
  else {
    fs.readdir(filesDir, (err, files) => {
      if (err) throw err;
      else console.log(files);
    });
  }
};

await list();
