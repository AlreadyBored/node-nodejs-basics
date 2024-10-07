import { access, readdir } from 'fs/promises'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dirPath = path.join(__dirname, 'files');

const list = async () => {
    try {
        await access(dirPath);
        const files = await readdir(dirPath);

        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();