import fs from "fs/promises";
import path from "path";
import {
  FILES_PATH,
  PROPPER_FILE_NAME,
  WRONG_FILE_NAME,
} from "./consts/index.js";
import { checkIfExists, throwFSError } from "./utils/index.js";

const wrongFilePath = path.join(FILES_PATH, WRONG_FILE_NAME);
const propperFilePath = path.join(FILES_PATH, PROPPER_FILE_NAME);

const rename = async () => {
  try {
    const isWrongFileExists = await checkIfExists(wrongFilePath);
    const isPropperFileExists = await checkIfExists(propperFilePath);

    if (!isWrongFileExists || isPropperFileExists) {
      throwFSError();
    }

    await fs.rename(wrongFilePath, propperFilePath, function (err) {
      if (err) throw err;
    });
  } catch (err) {
    console.error(err);
  }
};

await rename();
