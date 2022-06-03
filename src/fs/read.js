import fs from 'fs';
import { promisify } from 'util';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const readFile = promisify(fs.readFile);

export const read = async () => {
    try{
        if(fs.existsSync(path.join(__dirname,'files','fileToRead.txt'))){
          const content = await readFile(path.join(__dirname, 'files','fileToRead.txt'))
            console.log(content.toString());
        }
        else{
            throw new Error('File doesn\'t exist!')
        }
    }catch(err){
        console.error('FS operation failed: ', err.message);
    }
};

read();