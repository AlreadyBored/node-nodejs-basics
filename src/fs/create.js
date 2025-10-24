import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const fileName = fileURLToPath(import.meta.url);
const _dirName = dirname(fileName);

const create = async () => {
    const filePath = join(_dirName, 'files', 'fresh.txt');
    const content = 'I am fresh and young';

    try {
        await fs.access(filePath);

        const errorText = 'FS operation failed';
        throw new Error(errorText);
    } catch (error) {
        if (error.code === 'ENOENT') {
            const standard = 'utf8';
            await fs.writeFile(filePath, content, standard);
        } else {
            throw error;
        }
    }
};
await create();
