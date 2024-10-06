import fs from 'fs/promises';
import path from 'path';

// there was error about __dirname, get this solution from gpt
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        // check if the file exists
        await fs.access(filePath);
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed'); 
    }

    try {
        const content = await fs.readFile(filePath, 'utf8');
        console.log(content); 
    } catch (error) {
        console.log(error)
        throw new Error('FS operation failed');
    }
};

await read();