import * as path from "node:path";
import { fileURLToPath } from 'url';
import fs from 'fs';

export const filesFolder = '/files';
export const errorText = 'FS operation failed';

export const getCurrentPath = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};

export const getFilesFolderPath = () => `${getCurrentPath()}${filesFolder}`;

export const checkIfFileExists = (filePath) => {
  return fs.existsSync(filePath);
};