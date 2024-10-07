// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
import { readdir } from 'node:fs/promises';

const list = async () => {
  const __dirname = import.meta.dirname;
  const path = `${__dirname}/files`;

  try {
    const filenames = await readdir(path);
    console.log(filenames);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    } else {
      throw error;
    }
  }
};

await list();
