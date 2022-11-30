import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { access } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const wrongFilePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
    const properPath = path.resolve(__dirname, 'files', 'properFilename.md');
    if (await isFileExists(wrongFilePath) || ! await isFileExists(properPath)) {
    
        fs.rename(wrongFilePath, properPath,err=>err);
    } else {
       console.log('ERROR FS operation failed ');
    }
};


const isFileExists = async (path) => {
    try {
        await access(path);
        return true
    } catch (e) {
        return false;
    }
}

await rename();