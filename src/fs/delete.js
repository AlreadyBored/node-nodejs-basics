import fs from "fs/promises";
import path from "path";
import { FILES_PATH, DELETE_FILE_NAME } from "./consts/index.js";
import { checkIfExists } from "./utils/index.js";

const fileToDeletePath = path.join(FILES_PATH, DELETE_FILE_NAME);

const remove = async () => {
  try {
    const isFileToDeleteExists = await checkIfExists(fileToDeletePath);

    if (!isFileToDeleteExists) {
      throwFSError();
    }

    await fs.unlink(fileToDeletePath, function (err) {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
};

await remove();
