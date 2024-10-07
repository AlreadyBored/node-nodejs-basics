import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        // check if file exists
        await fs.access(filePath);
        // delete the file
        await fs.unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    };
};
    await remove();