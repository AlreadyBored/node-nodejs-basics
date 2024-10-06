import { existsSync, readFile } from "fs";

const FILE_PATH = "./src/fs/files/fileToRead.txt";
const ERROR_MSG = "FS operation failed";
const ENCODING = "utf8";

const read = async () => {
  if (!existsSync(FILE_PATH)) {
    throw new Error(ERROR_MSG);
  }

  readFile(FILE_PATH, ENCODING, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(data);
  });
};

await read();
