import { unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    const targetDir = join(__dirname, 'files');
    const filePath = join(targetDir, 'fileToRemove.txt');

    try {
        await unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();
