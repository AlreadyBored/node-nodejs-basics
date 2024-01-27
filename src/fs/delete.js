import { promises as fs } from 'fs';
import path from 'path';

const folderName = 'files';
const fileName = 'fileToRemove.txt'
const filePath = path.join(folderName, fileName);

const remove = async () => {
    try {
        await fs.unlink(filePath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed')
        }
    }
};

await remove();