import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    const removeFilePath = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(removeFilePath);
        await fs.unlink(removeFilePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed');
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await remove();
