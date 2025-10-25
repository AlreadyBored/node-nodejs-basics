import { join } from 'path';
import  {__dirname}  from '../utils.js';
import { createWriteStream, existsSync } from 'fs';

const create = async () => {
   
  const file = join(__dirname, 'fs/files/fresh.txt');
  const data = 'I am fresh and young';
  if (existsSync(file)) {
    throw new Error('FS operation failed');
  }
  let wstream = createWriteStream(file);
  wstream.write(data);
  wstream.end();
}

await create();
