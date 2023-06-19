import fs from 'fs';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const oldFile = path.join(__dirname, './files/wrongFilename.txt');
const newFile = path.join(__dirname, './files/wrongFilename.txt');

const rename = async () => {
    try {
        await fs.promises.rename(oldFile, newFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();