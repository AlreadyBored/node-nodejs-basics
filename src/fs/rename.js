import { checkIfPathExists, errorText, getFilesFolderPath } from "./utils.js";
import * as fsPromises from "node:fs/promises";

const rename = async () => {
  const originFileName = 'wrongFilename.txt';
  const newFileName = 'properFilename.md';
  const originFilePath = `${getFilesFolderPath()}/${originFileName}`;
  const newFilePath = `${getFilesFolderPath()}/${newFileName}`;

  if (!checkIfPathExists(originFilePath) || checkIfPathExists(newFilePath)) {
    throw new Error(errorText);
  }

  const fileContent = await fsPromises.readFile(originFilePath);

  await fsPromises.writeFile(newFilePath, fileContent);
  await fsPromises.rm(originFilePath);
};

await rename();