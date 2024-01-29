import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const remove = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.unlink(path.resolve(__dirname, 'files', 'fileToRemove.txt'), (err) => {
        if (err) {
            console.log('FS operation failed');
        }
    });
};

await remove();