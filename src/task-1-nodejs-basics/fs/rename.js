import path from 'node:path';
import fs from 'node:fs/promises';
import { checkFileExistsAsync } from '../utils/files.js';

const FILE_TO_RENAME = 'wrongFilename.txt';
const NEW_FILENAME = 'properFilename.md';

const rename = async () => {
    const currentDirectory = process.cwd();
    const fileToRenamePath = path.join(currentDirectory, '/files', FILE_TO_RENAME);
    const newFilePath = path.join(currentDirectory, '/files', NEW_FILENAME);
    if (!await checkFileExistsAsync(fileToRenamePath)) {
      throw new Error('FS operation failed');
    }
    if (await checkFileExistsAsync(newFilePath)) {
      throw new Error('FS operation failed'); 
    }
    try {
      await fs.rename(fileToRenamePath, newFilePath);
    } catch (err) {
      console.log('Rename file failed: ', err);
    }
};

await rename();
