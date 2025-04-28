import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
    // Write your code here 
    const oldPath = join('files', 'wrongFilename.txt');
    const newPath = join('files', 'properFilename.md');

    try {

        await fs.access(oldPath);


        try {
            await fs.access(newPath);

            throw new Error('FS operation failed');

        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await fs.rename(oldPath, newPath);


    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();