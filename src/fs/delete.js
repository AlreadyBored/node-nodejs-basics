import { checkIfFileExists, errorText, getFilesFolderPath } from "./utils.js";
import * as fsPromises from "node:fs/promises";

const remove = async () => {
  const fileToRemoveName = 'fileToRemove.txt';
  const fileToRemovePath = `${getFilesFolderPath()}/${fileToRemoveName}`;

  if (!checkIfFileExists(fileToRemovePath)) {
    throw new Error(errorText);
  }

  await fsPromises.rm(fileToRemovePath);
};

await remove();