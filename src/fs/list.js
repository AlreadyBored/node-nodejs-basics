import { checkIfPathExists, errorText, getFilesList, getFilesFolderPath } from "./utils.js";
import * as fsPromises from "node:fs/promises";

const list = async () => {
  if (!checkIfPathExists(getFilesFolderPath())) {
    throw new Error(errorText);
  }

  console.log(await getFilesList());
};

await list();