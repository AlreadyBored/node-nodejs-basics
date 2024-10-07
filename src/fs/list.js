import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
    const folderPath = path.join(__dirname, 'files');

    try {
        await fs.access(folderPath);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
    }

    const files = await fs.readdir(folderPath);

    console.log('Files in the folder:');
    console.log(files);

    return files;
};

await list();