import { unlink, existsSync } from "fs";

const FILE_PATH = "./src/fs/files/fileToRemove.txt";
const ERROR_MSG = "FS operation failed";

const remove = async () => {
  if (!existsSync(FILE_PATH)) {
    throw new Error(ERROR_MSG);
  }

  unlink(FILE_PATH, (err) => {
    if (err) console.error(err);
  });
};

await remove();
