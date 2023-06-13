import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
        
    fs.readdir(__dirname + '/files', (err, files) => {
        if (err) {
            return console.log('FS operation failed');
        }

        return console.log(files);
    });
};

await list();