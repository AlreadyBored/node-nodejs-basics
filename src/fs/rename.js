import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const rename = async () => {
    const oldPath = join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.access(oldPath);
        
        try {
            await fs.access(newPath);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code === 'ENOENT') {
                await fs.rename(oldPath, newPath);
            } else {
                throw new Error('FS operation failed');
            }
        }
    } catch (err) {
        if (err.message === 'FS operation failed') {
            throw err;
        }
        throw new Error('FS operation failed');
    }
};

await rename();