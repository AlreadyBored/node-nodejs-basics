import fs from 'fs';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToDir = path.join(__dirname, './files');

const list = async () => {
    try {
        const list = await fs.promises.readdir(pathToDir);
        console.log(list);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();