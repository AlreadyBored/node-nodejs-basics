import { writeFile, existsSync } from "fs";

const FILE_PATH = "./src/fs/files/fresh.txt";
const FILE_CONTENT = "I am fresh and young";
const ERROR_MSG = "FS operation failed";

const create = async () => {
  if (existsSync(FILE_PATH)) {
    throw new Error(ERROR_MSG);
  }

  writeFile(FILE_PATH, FILE_CONTENT, (err) => {
    if (err) console.error(err);
  });
};

await create();
