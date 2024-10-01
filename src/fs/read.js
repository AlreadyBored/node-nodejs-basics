import { checkIfPathExists, errorText, getFilesFolderPath } from "./utils.js";
import * as fsPromises from "node:fs/promises";

const read = async () => {
  const fileToReadName = 'fileToRead.txt';
  const fileToReadPath = `${getFilesFolderPath()}/${fileToReadName}`;

  if (!checkIfPathExists(fileToReadPath)) {
    throw new Error(errorText);
  }

  const fileContent = await fsPromises.readFile(fileToReadPath);
  console.log(fileContent.toString());
};

await read();