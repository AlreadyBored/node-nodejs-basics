import fs from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, 'files');

const list = async () => {
    fs.readdir(folderPath,
        (err, files) => {
            console.log(files);
            
            if (err) {
                console.error('FS operation failed');
            }
        }
    );
};

await list();