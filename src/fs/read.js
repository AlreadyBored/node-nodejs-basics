import fs from 'fs/promises';
import path from 'path';

const read = async () => {
    const filesPath = path.join('files', 'fileToRead.txt');
    try {
        await fs.access(filesPath)
        const fileContent = await fs.readFile(filesPath, { encoding: 'utf-8' });
        console.log(fileContent);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await read();