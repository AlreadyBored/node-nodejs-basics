import path from 'node:path';
import fs from 'node:fs/promises';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const read = async () => {
  const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.access(fileToReadPath);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
    
  try {
    const content = await fs.readFile(fileToReadPath, 'utf8');
    console.log(content);
  } catch (err) {
    throw err;
  }
};

await read();
