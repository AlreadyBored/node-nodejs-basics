import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    // Write your code here 
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files/fileToRead.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err || !filePath) {
            console.log('FS operation failed');
            throw new Error('FS operation failed');
        }
        console.log(data);
    }
    );
};
read();