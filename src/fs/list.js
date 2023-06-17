import { promises as fsPromises } from 'fs';

const list = async () => {
  try {
    await fsPromises.access('./files');
    const files = await fsPromises.readdir('./files');
    files.forEach((file) => {
      console.log(file);
    });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await list();
