import { ERROR_MSG, FILES_PATH } from "./constants.js";
import { rm } from "fs/promises";
import { getAbsUrl } from "./utils.js";

const FILE_NAME = "fileToRemove.txt";
const fileUrl = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);

const remove = async () => {
  try {
    rm(fileUrl);
  } catch {
    throw Error(ERROR_MSG);
  }
};

await remove();
