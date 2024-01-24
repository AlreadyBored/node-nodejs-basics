import { access, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    const folder = join(__dirname,'files');

    try {
        await access(folder);
        const fileNames = await readdir(folder);
        console.log(fileNames);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();