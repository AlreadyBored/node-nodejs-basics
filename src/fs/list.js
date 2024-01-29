import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const list = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.readdir(path.resolve(__dirname, 'files'), (err, files) => {
        if (err) {
            console.log('FS operation failed');
        } else {
            console.log(files);
        }
    })
};

await list();