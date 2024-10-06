import * as fs from "fs";

const WRONG_FILE_PATH = "./src/fs/files/wrongFilename.txt";
const PROPER_FILE_PATH = "./src/fs/files/properFilename.md";
const ERROR_MSG = "FS operation failed";

const rename = async () => {
  if (!fs.existsSync(WRONG_FILE_PATH) || fs.existsSync(PROPER_FILE_PATH)) {
    throw new Error(ERROR_MSG);
  }

  fs.rename(WRONG_FILE_PATH, PROPER_FILE_PATH, (err) => {
    if (err) console.error(err);
  });
};

await rename();
