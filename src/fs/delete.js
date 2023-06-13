import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const remove = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const fileToRemove = path.join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.rm(fileToRemove);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();