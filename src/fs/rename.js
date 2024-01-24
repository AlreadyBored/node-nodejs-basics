import fs from "node:fs/promises";
import { constants } from "node:fs/promises";

const srcFilePath = "./files/wrongFileName.txt";
const destFilePath = "./files/wrongFileName.md";

const fsOperationFailedErrorMessage = "FS operation failed";

const rename = async () => {
  await validateSourceFileExists();
  await validateDestinationFileDoesNotExists();

  doRename();
};

const validateSourceFileExists = async () => {
  try {
    await fs.access(srcFilePath, constants.R_OK);
  } catch (err) {
    if (isFileNotExistsError(err)) {
      throw new Error(fsOperationFailedErrorMessage);
    }
    throw err;
  }
};

const validateDestinationFileDoesNotExists = async () => {
  try {
    await fs.access(destFilePath, constants.R_OK);
    throw new Error(fsOperationFailedErrorMessage);
  } catch (err) {
    if (!isFileNotExistsError(err)) {
      throw err;
    }
  }
};

const doRename = () => {
  fs.rename(srcFilePath, destFilePath)
    .then(() => console.log("File renamed successfully."))
    .catch((err) => {
      throw err;
    });
};

const isFileNotExistsError = (err) => {
  return err.code === "ENOENT";
};

await rename();
