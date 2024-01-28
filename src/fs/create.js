import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    const filePath = path.join('files', 'fresh.txt');
    try {
        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filePath, 'I am fresh and young');
        } else {
            throw err;
        }
    }
};

await create();