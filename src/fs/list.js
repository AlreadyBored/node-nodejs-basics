import { checkIfPathExists, errorText, getFilesList, getFilesFolderPath } from "../utils.js";

const list = async () => {
  if (!checkIfPathExists(getFilesFolderPath('fs'))) {
    throw new Error(errorText);
  }

  console.log(await getFilesList('fs'));
};

await list();