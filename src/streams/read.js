import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const stdout = process.stdout;

export const read = async () => {
    // Write your code here 
    const input = fs.createReadStream(path.join(__dirname, 'files/fileToRead.txt'), { encoding: 'utf8' });
    input.on('data', data => stdout.write(data));
    input.on('error', error => console.log('Error', error.message));
};
read();