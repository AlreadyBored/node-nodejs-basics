import fs from 'fs';
import path from 'path';
import { constants } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    fs.access(__dirname, constants.F_OK, (err) => {
        if (err) throw console.error('Error: FS operation failed');

        fs.access('src/fs/files_copy', constants.F_OK, (err) => {
            if (err) {
                fs.mkdir('src/fs/files_copy', err => {
                    if (err) throw err;
                })
            }else throw console.error('Error: FS operation failed');            
            
        })

        fs.readdir('src/fs/files', (err, data) => {
            if (err) throw console.error('Error: FS operation failed');

            data.forEach(file => {               
                fs.copyFile(
                    path.join('src/fs/files', file),
                    path.join('src/fs/files_copy', file),
                    (err) => {
                    if (err) throw err;
                })
            })
        })
    });
};

copy();