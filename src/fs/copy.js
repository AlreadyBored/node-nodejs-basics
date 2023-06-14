import { mkdir, copyFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const folderPath = path.join(__dirname, 'files');
const copyFolderPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await access(folderPath);
    const [files] = await  Promise.all([readdir(folderPath), mkdir(copyFolderPath)]);
    const promises = files.map((fileName) => {
        const filePath = path.join(folderPath, fileName);
        const copyFilePath = path.join(copyFolderPath, fileName);
        return copyFile(filePath, copyFilePath);
    })

    await Promise.all(promises);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();

