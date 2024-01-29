import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const absolutePath = path.dirname(__filename);
const folderPath = path.join(absolutePath, 'files');
const filePath = path.join(folderPath, 'fileToRead.txt');

const read = async () => {
    try {
        const fileContent = await fs.readFile(filePath,'utf8');
        console.log(fileContent);
            
    } catch (error) {
        throw new Error('FS operation failed');
  }
};

await read();