import fs from 'fs/promises';
import path from 'path';
const create = async () => {
    const fileContent = 'I am fresh and young';
    const filePath = path.join(import.meta.dirname, 'files', 'fresh.txt');

    try {
        await fs.access(filePath);
        throw new Error('FS operation failed')
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filePath, fileContent, 'utf8');
        } else {
            throw err;
        }
    }
};

await create();
