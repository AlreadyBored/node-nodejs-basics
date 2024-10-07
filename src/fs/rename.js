import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rename = async () => {
    const wrongFile = path.join(__dirname, 'files','wrongFilename.txt');
    const properFile = path.join(__dirname, 'files','properFilename.md');

    if (!fs.existsSync(wrongFile) || fs.existsSync(properFile)) {
        throw new Error('FS operation failed');
    }

    fs.renameSync(wrongFile, properFile);
};

await rename();