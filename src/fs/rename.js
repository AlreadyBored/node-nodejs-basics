import fs from 'fs';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { join, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const renameFile = promisify(fs.rename);

export const rename = async () => {
   
    try {
        if(
            fs.existsSync(join(__dirname,'files','wrongFilename.txt')) &&
            !fs.existsSync(join(__dirname,'files', 'properFilename.md'))
        ){
           await renameFile(join(__dirname,'files','wrongFilename.txt'), join(__dirname, 'files', 'properFilename.md'))
        }
        else {
            throw new Error('FS operation failed: Files are already exist')
        }
    }
    catch(err) {
        console.error(err.message);
    }
    
};
rename()