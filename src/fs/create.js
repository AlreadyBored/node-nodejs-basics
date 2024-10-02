import fs from "fs";
import { ERROR_FS } from "../constants.js";
import { isFileExist } from "../shared.js";

const create = async () => {
  // Write your code here
  const fresh = "./src/fs/files/fresh.txt";

  if (!(await isFileExist(fresh)))
    fs.appendFile(fresh, "I am fresh and young", (err) => {
      if (err) throw err;
    });
  else throw Error(ERROR_FS); // file already exist
};

await create();
