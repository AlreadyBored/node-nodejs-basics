import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
    // Write your code here 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files/wrongFilename.txt');
    const newFilePath = path.join(__dirname, 'files/properFilename.md');
    fs.rename(filePath, newFilePath, (err) => {
        if (err) {
            console.log('FS operation failed');
            throw new Error('FS operation failed');
        }
        console.log('Файл переименован');
    });
};


rename();