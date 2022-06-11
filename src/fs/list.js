import { readdir } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename =  fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export const list = async () => {

    try {
      const files = await readdir(__dirname+'/files');
      files.forEach(file => console.log(file))
    }catch (e){
        throw new Error('FS operation failed');
    }
};
list();