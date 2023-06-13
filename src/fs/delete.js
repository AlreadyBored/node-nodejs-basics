import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
    fs.unlink(__dirname + '/files/fileToRemove.txt', err => {
        if (err) {
            return console.log('FS operation failed');
        }
    });
};

await remove();