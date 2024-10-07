import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const list = async () => {
    fs.readdir(__dirname + '\\files', (err, files) => {
        if (files) {
            console.log(files);
        }
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        }        
    })
};

await list();