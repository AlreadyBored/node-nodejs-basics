import fs from "fs/promises";
import path from "path";
import { FILES_PATH } from "./consts/index.js";
import { checkIfExists, throwFSError } from "./utils/index.js";

const list = async () => {
  try {
    const isFolderExists = await checkIfExists(FILES_PATH);

    if (!isFolderExists) {
      throwFSError();
    }

    const filesNames = await fs.readdir(FILES_PATH);
    console.log(filesNames);
  } catch (err) {
    console.error(err);
  }
};

await list();
