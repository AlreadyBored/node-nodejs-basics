import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { isExists } from '../utils.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const fileNameToRenameFromPath = join(__dirname, 'files/wrongFilename.txt');
  const fileNameToRenameToPath = join(__dirname, 'files/properFilename.md');

  if (
    !await isExists(fileNameToRenameFromPath) &&
    await isExists(fileNameToRenameToPath)
  ) {
    throw new Error('FS operation failed');
  }

  try {
    await fs.rename(fileNameToRenameFromPath, fileNameToRenameToPath);
    console.log('File "wrongFilename.txt" has been renamed to "properFilename.md"');
  } catch (error) {
    console.log('🚀 ~ rename ~ error:', error);
  }
};

await rename();