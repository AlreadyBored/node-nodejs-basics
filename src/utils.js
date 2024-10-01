import * as path from "node:path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import * as fsPromises from "node:fs/promises";

export const filesFolder = '/files';
export const errorText = 'FS operation failed';

export const getCurrentPath = (folder = '') => {
  const __filename = fileURLToPath(import.meta.url);
  if (!folder) {
    return path.dirname(__filename);
  }
  return `${path.dirname(__filename)}/${folder}`;
};

export const getFilesFolderPath = (folder = '') => `${getCurrentPath(folder)}${filesFolder}`;

export const checkIfPathExists = (filePath) => {
  return fs.existsSync(filePath);
};

export const getFilesList = async (folder = '') => {
  const filesList = await fsPromises.readdir(getFilesFolderPath(folder));
  return filesList;
}