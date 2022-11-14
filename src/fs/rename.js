import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const wrongFile = path.resolve(__dirname, 'files', 'wrongFilename.txt')
    const properFilename = path.resolve(__dirname, 'files', 'properFilename.md')
    try {
        if (!fs.existsSync(wrongFile) || fs.existsSync(properFilename)) throw Error('FS operation failed')
        fs.rename(wrongFile, properFilename, (err) => {
            if (err) throw Error()
        })
    } catch (e) {
        console.error(e.message);
    }
};

await rename();