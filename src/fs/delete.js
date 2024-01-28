import { access, unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    const file = join(__dirname,'files','fileToRemove.txt');
    try {
        await access(file);
        await unlink(file);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();