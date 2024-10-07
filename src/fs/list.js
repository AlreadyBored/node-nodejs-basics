import fs from 'node:fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const projectFiles = path.join(__dirname, 'files');

    try {
        await fs.access(projectFiles);
        const files = await fs.readdir(projectFiles);
        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('FS operation failed')
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await list();
