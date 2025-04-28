import fs from 'node:fs/promises';
import path from 'node:path';

const list = async () => {
    try {
        const folderPath = path.join('files');

        await fs.access(folderPath);

        const files = await fs.readdir(folderPath);

        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();
