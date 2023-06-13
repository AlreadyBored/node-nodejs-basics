import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    fs.mkdir(__dirname + '/files_copy', (err) => {
        if (err) {
            return console.log('FS operation failed');
        }
    });
        
    fs.readdir(__dirname + '/files', (err, files) => {
        if (err) {
            return console.log('FS operation failed');
        }
        files.forEach(file => {
            fs.copyFile(__dirname + `/files/${file}`, __dirname + `/files_copy/${file}`, () => {});
        });
    });
};

await copy();
