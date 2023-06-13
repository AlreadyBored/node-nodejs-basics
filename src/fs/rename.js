import fs from 'fs/promises';
import path from 'path';
import url from 'url'

const rename = async () => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const wrongFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const properFile = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.rename(wrongFile, properFile);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await rename();