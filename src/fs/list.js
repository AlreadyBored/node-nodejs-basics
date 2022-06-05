import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesPath = path.join(__dirname, 'files');

export const list = async () => {
    fs.readdir(filesPath, { withFileTypes: true }, (err, files) => {
        if(err) throw ('FS operation failed');

        files.map((file) => console.log(file.name))
    }) 
};

list();
