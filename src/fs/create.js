import fs from 'fs'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const dir = dirname(fileURLToPath(import.meta.url));
  if (fs.existsSync(`${dir}/files/fresh.txt`)) {
    throw new Error('FS operation failed');
  }

  fs.appendFile(`${dir}/files/fresh.txt`,'I am fresh and young', (err)=>{
    if(err) throw err;
    console.log('Saved')
  });
};

await create();
