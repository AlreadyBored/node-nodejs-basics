import path from 'path';
import { promises } from 'fs';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await promises.access(filePath);
        console.error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT' && error.path === filePath) {
            await promises.writeFile(filePath, 'I am fresh and young');
        }
    }
};

await create();