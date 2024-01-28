import { promises as fs } from 'fs';
import path from 'path';

const read = async () => {
    const filePath = path.join('src', 'fs', 'files', 'fileToRead.txt');
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }
};

await read();