import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const list = async () => {
    const folderPath = path.resolve(__dirname, 'files');

    try {
        await fs.access(folderPath);
        const files = await fs.readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
