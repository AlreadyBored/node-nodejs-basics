import { ERROR_MSG, FILES_PATH } from "./constants.js";
import { readdir } from "fs/promises";
import { getAbsUrl } from "./utils.js";

const originalFolderUrl = getAbsUrl(FILES_PATH);

const list = async () => {
  try {
    console.log(await readdir(originalFolderUrl));
  } catch {
    throw Error(ERROR_MSG);
  }
};

await list();
