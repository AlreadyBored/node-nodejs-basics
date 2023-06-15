import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    fs.readFile(
        filePath,
        'utf-8',
        (err, data) => {
            if (data) {
                console.log(data);
            }
            
            if (err) {
                console.error('FS operation failed');
            }
        }
    );
};

await read();