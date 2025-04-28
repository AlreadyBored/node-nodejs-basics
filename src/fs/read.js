import { promises as fs } from 'fs';
import { join } from 'path';



const read = async () => {
    // Write your code here 
    const filePath = join('files', 'fileToRead.txt');

    try {
        await fs.access(filePath);
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();