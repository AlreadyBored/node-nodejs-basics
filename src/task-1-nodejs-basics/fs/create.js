import fs from 'node:fs/promises';
import path from 'node:path';
import { checkFileExistsAsync } from '../utils/files.js';

const FILE_NAME = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
  const currentDirectory = process.cwd();
  const fullpath = path.join(currentDirectory, '/files', FILE_NAME);
  const fileExists = await checkFileExistsAsync(fullpath);
  if (fileExists) {
    throw new Error('FS operation failed');
  }
  try {
    await fs.writeFile(fullpath, FILE_CONTENT);
  } catch (err) {
    console.log('Error creating the file: ', err);
  }
};

await create();
