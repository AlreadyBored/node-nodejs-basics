import fs from 'fs';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, './files/fileToRemove.txt');

const remove = async () => {
    try {
        await fs.promises.rm(pathToFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();