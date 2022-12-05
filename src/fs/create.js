import fs from 'node:fs'
import path from "path";
const create = async () => {
  await fs.writeFile(path.resolve('./src/fs/files','fresh.txt'), 'I am fresh and young', ()=>{
    console.error('FS operation failed')
  })
};

await create();