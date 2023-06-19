import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));

  try {
    const names = fs.readdirSync(`${dir}/files`)
    names.forEach((name)=> {
      console.log(name);
    });
  }
  catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
