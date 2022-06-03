import fs from 'fs';
import { promisify } from 'util';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const unlink = promisify(fs.unlink);

export const remove = async () => {
    try{
        if(fs.existsSync(path.join(__dirname,'files','fileToRemove.txt'))){
            await unlink(path.join(__dirname, 'files','fileToRemove.txt'));
            console.log('File deleted successfully!');
        }
        else{
            throw new Error('File doesn\'t exist!')
        }
    }catch(err){
        console.error('FS operation failed: ', err.message);
    }
};

remove();