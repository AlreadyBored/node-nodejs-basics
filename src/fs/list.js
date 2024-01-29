import fs from 'fs/promises';
import path from 'path';

const list = async () => {
    const filesPath = path.join('files');
    try {
        await fs.access(filesPath)
        const files = await fs.readdir(filesPath);
        console.log(files);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }

};

await list();