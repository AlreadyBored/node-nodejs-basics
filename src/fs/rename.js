import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const absolutePath = path.dirname(__filename);
const folderPath = path.join(absolutePath, 'files');
const filePath = path.join(folderPath, 'wrongFilename.txt');
const newFilePath = path.join(folderPath, 'properFilename.md');

const rename = async () => {
    try {
        if(!fs.stat(newFilePath)) {
            throw new Error('FS operation failed');
        } else {
            await fs.rename(filePath, newFilePath);
        }
                
    } catch (error) {
        throw new Error('FS operation failed');
    } 
};

await rename();