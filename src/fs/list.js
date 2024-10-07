import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
        await fs.access(folderPath);
        const filenames = await fs.readdir(folderPath);
        console.log(filenames);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
