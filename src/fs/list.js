import { promises as fs } from 'fs';
import { join } from 'path';

const list = async () => {
    const filesPath = join('files');

    try {
        await fs.access(filesPath);
        const files = await fs.readdir(filesPath);

        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();
