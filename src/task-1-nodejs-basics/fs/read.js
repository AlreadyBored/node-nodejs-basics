import fs from 'node:fs/promises';
import path from 'node:path';
import { checkFileExistsAsync } from '../utils/files.js';

const FILE_TO_READ = 'fileToRead.txt';

const read = async () => {
  const currentDirectory = process.cwd();
  const filePath = path.join(currentDirectory, '/files', FILE_TO_READ);
    if (!await checkFileExistsAsync(filePath)) {
    throw new Error('FS operation failed');
  }
  try {
    const data = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error('Error on reading the file: ', err);
  }
};

await read();
