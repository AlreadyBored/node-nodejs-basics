import { promises as fs } from 'fs';

const DIR = './src/fs/files'
const ERRORMSG = 'FS operation failed'

const list = async () => {
    try{
        const files = await fs.readdir(DIR);
        for (const file of files)
          console.log(file)
      }catch{
        throw ERRORMSG
      }
}

await list();