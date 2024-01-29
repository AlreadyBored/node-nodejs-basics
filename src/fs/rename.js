import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const rename = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.rename(path.resolve(__dirname, 'files', 'wrongFilename.txt'), path.resolve(__dirname, 'files', 'properFilename.md'), (err) => {
        if (err) {
            console.log('FS operation failed');
        }
    });
};

await rename();