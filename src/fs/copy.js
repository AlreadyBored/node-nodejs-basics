import { getCurrentPath, checkIfFileExists, filesFolder, errorText } from "./utils.js";
import * as fsPromises from "node:fs/promises";

const copy = async () => {
  const newFolderName = '/files_copy';
  const oldFolderPath = getCurrentPath() + filesFolder;
  const newFolderPath = getCurrentPath() + newFolderName;

  if (checkIfFileExists(newFolderPath) || !checkIfFileExists(oldFolderPath)) {
    throw new Error(errorText);
  }

  await fsPromises.mkdir(newFolderPath);

  const copyFile = async (fileName) => {
    const fileContent = await fsPromises.readFile(`${oldFolderPath}/${fileName}`);
    await fsPromises.writeFile(`${newFolderPath}/${fileName}`, fileContent);
  };

  const filesArray = await fsPromises.readdir(oldFolderPath);

  for (let file of filesArray) {
    await copyFile(file);
  }
};

await copy();
