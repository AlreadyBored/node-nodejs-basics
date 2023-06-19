import { ERROR_MSG, FILES_PATH } from "./constants.js";
import { readFile } from "fs/promises";
import { getAbsUrl } from "./utils.js";

const FILE_NAME = "fileToRead.txt";
const fileUrl = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);

const read = async () => {
  try {
    const content = await readFile(fileUrl, 'utf8');
    console.log(content);
  } catch {
    throw Error(ERROR_MSG);
  }
};

await read();
