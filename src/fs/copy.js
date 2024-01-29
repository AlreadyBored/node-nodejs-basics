import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { checkIfExists, throwFSError } from "./utils/index.js";
import { COPY_FOLDER_NAME, FILES_FOLDER_NAME } from "./consts/index.js";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceFolderPath = path.join(dirname, FILES_FOLDER_NAME);
const copyFolderPath = path.join(dirname, COPY_FOLDER_NAME);

const copy = async () => {
  try {
    const isSourceFolderExists = await checkIfExists(sourceFolderPath);
    const isCopyFolderAlreadyExists = await checkIfExists(copyFolderPath);

    if (!isSourceFolderExists || isCopyFolderAlreadyExists) {
      throwFSError();
    }

    await fs.cp(
      sourceFolderPath,
      copyFolderPath,
      { recursive: true },
      (err) => {
        if (error) {
          throw error;
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

await copy();
