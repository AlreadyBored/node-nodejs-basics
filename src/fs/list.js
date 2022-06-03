import fs from 'fs';
import { promisify } from 'util';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const readDir = promisify(fs.readdir);

export const list = async () => {
    try{
        if(fs.existsSync(path.join(__dirname,'files')) && fs.statSync(path.join(__dirname,'files')).isDirectory()){
          const list = await readDir(path.join(__dirname, 'files'))
            console.log(list);
        }
        else{
            throw new Error('Folder doesn\'t exist!')
        }
    }catch(err){
        console.error('FS operation failed: ', err.message);
    }
};

list();