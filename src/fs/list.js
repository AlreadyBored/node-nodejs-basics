import { promises as fs } from 'fs';
import path from 'path';

const list = async () => {
    const dirPath = path.join('src', 'fs', 'files');
    try {
        const files = await fs.readdir(dirPath);
        files.forEach(file => console.log(file));
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error("FS operation failed");
        } else {
            throw error;
        }
    }
};

await list();