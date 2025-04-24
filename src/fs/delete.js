import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const remove = async () => {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filePath);
        
        await fs.unlink(filePath);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();
