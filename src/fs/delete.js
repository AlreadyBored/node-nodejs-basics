import {fileURLToPath} from 'url';
import {join, dirname} from 'path';
import {promises as fs} from 'fs';

const remove = async () => {
    // Write your code here
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();