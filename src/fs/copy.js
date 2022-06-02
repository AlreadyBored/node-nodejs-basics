import fs from 'fs';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const copy = async () => {

  const inputFolderPath = `${__dirname}files`;
  const copyFolderName = `${__dirname}files_copy`;

  const getFilesFromFolder = (name) => {
    return fs.readdirSync(name);
  };

  const createFolder = (name) => {
    fs.mkdirSync(name);
  };

  try {
    const filesName = getFilesFromFolder(inputFolderPath);
    createFolder(copyFolderName);

    filesName.forEach((filesName) => {
      fs.copyFileSync(`${inputFolderPath}/${filesName}`, `${copyFolderName}/${filesName}`);
    });

  } catch (e) {
    throw new Error('FS operation failed');
  }
};
