import * as fsPromises from "node:fs/promises";
import { getCurrentPath, checkIfFileExists, filesFolder, errorText } from "./utils.js";

const create = async () => {
  const fileName = 'fresh.txt';
  const fileContent = 'I am fresh and young';
  
  const currentUrl = getCurrentPath();
  const fullFilePath = `${currentUrl}${filesFolder}/${fileName}`;
  
  if (checkIfFileExists(fullFilePath)) {
    throw new Error(errorText);
  }

  await fsPromises.writeFile(fullFilePath, fileContent);

};

await create();