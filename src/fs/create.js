import { access, writeFile } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const pathToFile = path.join(__dirname, 'files', 'fresh.txt');
    const text = 'I am fresh and young';

    try {
        await access(pathToFile);
        // будет выполняться если файл есть
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(pathToFile, text);
        } else {
            throw error;
        }
    }
};

await create();
