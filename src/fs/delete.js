import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const remove = async () => {
    fs.rm(__dirname + '\\files\\fileToRemove.txt', (err) => {
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        }
    });
};

await remove();