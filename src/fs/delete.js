import {promises as fs} from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const __dirname = path.dirname(fileURLToPath(import.meta.url));


const remove = async () => {
    const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filePath);
        try {
            await fs.unlink(filePath);
            console.log('File deleted');
        } catch (error) {
            throw new Error('FS operation failed');
        }
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await remove();
