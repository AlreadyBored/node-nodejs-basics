import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { checkFileExistsAsync } from '../utils/files.js';

const list = async () => {
  const currentDirectory = process.cwd();
  const filesPath = path.join(currentDirectory, '/files');
  if (!await checkFileExistsAsync(filesPath)) {
    throw new Error('FS operation failed');
  }
  let filenames = [];
  try {
    const files = await readdir(filesPath);
    for (const file of files) {
      filenames.push(file)
    }
  } catch (err) {
    console.error('Error happened while copying files: ', err);
  }
  console.log(filenames);
};

await list();
