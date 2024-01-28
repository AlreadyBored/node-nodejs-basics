import fs from 'node:fs';
import url from 'node:url';
import path from 'node:path';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFileName.md');

const rename = async () => {
    if (!fs.existsSync(oldFilePath) || fs.existsSync(newFilePath)) {
        throw new Error('FS operation failed');
    }

    fs.rename(oldFilePath, newFilePath, err => {
        if (err) throw err;

        console.log('*** File renamed successfully! ***');
    })
};

await rename();