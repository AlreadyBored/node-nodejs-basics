import { promises as fs } from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const fileName = 'fileToRead.txt'
const folderName = 'files'
const filePath = path.join(__dirname, folderName, fileName)

const read = async () => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        
        console.log(fileContent);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};

await read();