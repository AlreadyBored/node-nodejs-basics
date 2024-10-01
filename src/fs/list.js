import { checkIfPathExists, errorText, getFilesList, getFilesFolderPath } from "./utils.js";

const list = async () => {
  if (!checkIfPathExists(getFilesFolderPath())) {
    throw new Error(errorText);
  }

  console.log(await getFilesList());
};

await list();