import {rm} from 'fs/promises';
import fs from 'fs';
import path, { dirname } from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRemove.txt' )
  
  
  await rm(filePath).catch((error)=> {
    if(error) { throw new Error('FS operation failed');}
  })
  
  
};

await remove();
