import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const read = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.readFile(path.resolve(__dirname, 'files', 'fileToRead.txt'), (err, data) => {
        if (err) {
            console.log('FS operation failed');
        }
        else {
            console.log(data.toString());
        }
    })
};

await read();