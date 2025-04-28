import { promises as fs } from 'fs';
import path from 'path';

const list = async () => {
  const folderPath = path.join('files');

  try {
    await fs.access(folderPath);

    const filenames = await fs.readdir(folderPath);

    console.log(filenames);

  } catch (err) {
    throw new Error('FS operation failed');
  }
};

list();
