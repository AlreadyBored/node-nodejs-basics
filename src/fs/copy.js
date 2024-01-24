import { access, cp, constants } from "node:fs/promises";

const sourcePath = "./files";
const destPath = sourcePath.concat("_copy");

const fsOperationFailedErrorMessage = "FS operation failed";

const copy = async () => {
  await validateSourceDirExists();
  await validateDestinationDirDoesNotExist();

  doCopy();
};

const validateSourceDirExists = async () => {
  try {
    await access(sourcePath, constants.R_OK | constants.W_OK);
  } catch (err) {
    if (err.code) {
      throw new Error(fsOperationFailedErrorMessage);
    }
    throw err;
  }
};

const validateDestinationDirDoesNotExist = async () => {
  try {
    await access(destPath, constants.R_OK | constants.W_OK);
    throw new Error(fsOperationFailedErrorMessage);
  } catch (err) {
    if (err.code !== "ENOENT") {
      throw err;
    }
  }
};

const doCopy = () => {
  cp(sourcePath, destPath, { recursive: true })
    .then(() => console.log("Copied successfully."))
    .catch((err) => {
      throw err;
    });
};

await copy();
