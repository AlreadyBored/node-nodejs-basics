import { existsSync, readdir } from "fs";

const FOLDER_PATH = "./src/fs/files";
const ERROR_MSG = "FS operation failed";

const list = async () => {
  if (!existsSync(FOLDER_PATH)) {
    throw new Error(ERROR_MSG);
  }

  readdir(FOLDER_PATH, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
