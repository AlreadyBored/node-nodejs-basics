import { getCurrentPath, checkIfPathExists, errorText, getFilesList, getFilesFolderPath } from "../utils.js";
import * as fsPromises from "node:fs/promises";

const copy = async () => {
  const newFolderName = '/files_copy';
  const oldFolderPath = getFilesFolderPath('fs');
  const newFolderPath = getCurrentPath('fs') + newFolderName;

  if (checkIfPathExists(newFolderPath) || !checkIfPathExists(oldFolderPath)) {
    throw new Error(errorText);
  }

  await fsPromises.mkdir(newFolderPath);

  const copyFile = async (fileName) => {
    const fileContent = await fsPromises.readFile(`${oldFolderPath}/${fileName}`);
    await fsPromises.writeFile(`${newFolderPath}/${fileName}`, fileContent);
  };

  const filesArray = await getFilesList('fs');

  for (let file of filesArray) {
    await copyFile(file);
  }
};

await copy();
