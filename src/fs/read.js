import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    fs.readFile(__dirname + '/files/fileToRead.txt', 'utf-8', (err, data) => {
        if (err) {
            return console.log('FS operation failed');
        }
        return console.log(data);
    })
};

await read();