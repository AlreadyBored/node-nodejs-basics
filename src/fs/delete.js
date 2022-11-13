import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const pathToFile = path.join(__dirname, 'files', 'fileToRemove.txt')
        fs.unlink(pathToFile,function(err){
            if(err) return console.log('FS operation failed');;
            console.log('file deleted successfully');
       });    
};

await remove();