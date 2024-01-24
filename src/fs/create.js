import fs from "fs";
import { constants } from "fs/promises";

const filePath = "./src/fs/files/fresh.txt";
const phraseToWrite = "I am fresh and young";
const fsOperationFailedErrorMessage = "FS operation failed";

const create = async () => {
  fs.access(filePath, constants.R_OK, (err) => {
    if (!err) {
      throw new Error(fsOperationFailedErrorMessage);
    }

    if (err.code === "ENOENT") {
      writeFile();
      return;
    }

    throw err;
  });
};

const writeFile = () => {
  fs.writeFile(filePath, phraseToWrite, (err) => {
    if (err) {
      throw err;
    }
    console.log("File created successfully");
  });
};

await create();
