import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const copy = async () => {

    const source = path.join(__dirname, 'files');
    const destination = path.join(__dirname, 'files_copy');

    if (!fs.existsSync(source) || fs.existsSync(destination)) {
        throw new Error('FS operation failed');
    }

    fs.copyFileSync(source, destination);

};

await copy();
