import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  fs.rename(`${dir}/files/wrongFilename.txt`, `${dir}/files/properFilename.md`, (err)=> {
    if(err) throw new Error('FS operation failed');
    console.log('Renamed');
  })
};

await rename();
