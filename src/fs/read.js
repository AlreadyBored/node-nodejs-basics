import fs from "fs/promises";
import path from "path";
import { FILES_PATH, READ_FILE_NAME } from "./consts/index.js";
import { checkIfExists, throwFSError } from "./utils/index.js";

const fileToReadPath = path.join(FILES_PATH, READ_FILE_NAME);

const read = async () => {
  try {
    const isFileToReadExists = await checkIfExists(fileToReadPath);

    if (!isFileToReadExists) {
      throwFSError();
    }

    const fileContent = await fs.readFile(fileToReadPath, "utf8");
    console.log(fileContent);
  } catch (err) {
    console.error(err);
  }
};

await read();
