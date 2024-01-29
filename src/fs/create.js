import fs from "fs/promises";
import path from "path";
import { checkIfExists, throwFSError } from "./utils/index.js";
import { FILES_PATH, NEW_FILE_NAME } from "./consts/index.js";

const filePath = path.join(FILES_PATH, NEW_FILE_NAME);
const fileContent = "I am fresh and young";

const create = async () => {
  try {
    const isFileExist = await checkIfExists(filePath);

    if (isFileExist) {
      throwFSError();
    }

    await fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        throwFSError(`Cannot create a file: ${err}`);
        return;
      }
    });
  } catch (err) {
    console.error(err);
  }
};

await create();
