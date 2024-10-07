import { promises as fs } from 'fs';

const list = async () => {
    try {
        const files = await fs.readdir('./files');

        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();