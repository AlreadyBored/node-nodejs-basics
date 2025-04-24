import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const list = async () => {
    const folderPath = join(__dirname, 'files');

    try {
        await fs.access(folderPath);

        const files = await fs.readdir(folderPath);

        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
