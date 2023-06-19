import { ERROR_MSG, FILES_PATH } from "./constants.js";
import { rename as renameFile } from "fs/promises";
import { exists, getAbsUrl } from "./utils.js";

const ORIGINAL_FILE_NAME = "wrongFilename.txt";
const NEW_FILE_NAME = "properFilename.md";
const originalFileUrl = getAbsUrl(`${FILES_PATH}/${ORIGINAL_FILE_NAME}`);
const newFileUrl = getAbsUrl(`${FILES_PATH}/${NEW_FILE_NAME}`);

const rename = async () => {
  if (await exists(newFileUrl)) {
    throw Error(ERROR_MSG);
  } else {
    await renameFile(originalFileUrl, newFileUrl);
  }
};

await rename();
