import fs from "fs";
import { ERROR_FS } from "../constants.js";
import { isFileExist } from "../shared.js";

const read = async () => {
  // Write your code here
  const fileToRead = "./src/fs/files/fileToRead.txt";

  const readFile = (file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) throw err;
      else console.log(data);
    });
  };

  if (!(await isFileExist(fileToRead))) throw Error(ERROR_FS);
  else readFile(fileToRead);
};

await read();
