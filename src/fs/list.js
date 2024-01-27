import fs from 'fs/promises';
import path, {dirname} from 'path';
import {fileURLToPath} from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const dirName = 'files';
    const filePath = path.join(__dirname, dirName);

    try {
        await fs.access(filePath)
    } catch (error) {
        throw new Error('FS operation failed');
    }
    const files = await fs.readdir(filePath);
    for (const file of files)
        console.log(file);
};

await list();