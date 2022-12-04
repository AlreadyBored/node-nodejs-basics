import fs from 'node:fs/promises';
import path from 'node:path';

//create.js - implement function that creates new file fresh.txt
// with content I am fresh and young inside of the files folder
// (if file already exists Error with message FS operation failed must be thrown)

const create = async () => {
   // Write your code here 
  const dir = path.resolve(process.cwd(), 'src', 'fs', 'files');

  try {
    await fs.access(dir);
    await fs.writeFile(path.resolve(`${dir}`, 'fresh.txt'), 'I am fresh and young inside', 'utf-8');
  } catch (error) {
    throw new Error('FS operation failed');
  }

};

await create();