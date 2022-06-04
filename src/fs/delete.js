import fs from 'fs/promises';
import path from 'path';
import { __dirname } from './create.js';


export const remove = async () => {
    // Write your code here 
    try {
        await fs.rm(path.join(__dirname, "files/fileToRemove.txt"), { force: false });
        console.log('Файл удален');
    } catch (err) {
        console.log(err);
        console.log('FS operation failed');
        throw new Error('FS operation failed');
    }

};
remove();