import path from 'node:path';
import fs from 'node:fs/promises';
import { getDirInfo } from '../utils/getDirInfo.js';

const { __dirname } = getDirInfo(import.meta.url);

const list = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
    await fs.access(folderPath);
  } catch (err) {
    throw new Error('FS operation failed'); 
  }
    
  try {
    const files = await fs.readdir(folderPath);
    for (const file of files) {
      console.log(file);
    }
  } catch (err) {
    throw err;
  }
};

await list();
