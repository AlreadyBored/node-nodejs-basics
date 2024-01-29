import fs from 'fs';
import path from 'path';

const read = async () => {
    // Write your code here 
    const filePath = path.join("files", 'fileToRead.txt');

    try {
        await fs.promises.access(filePath);

        const content = await fs.promises.readFile(filePath, 'utf-8');
        console.log('Content of fileToRead.txt:', content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();