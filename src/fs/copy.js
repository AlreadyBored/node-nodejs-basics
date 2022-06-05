import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const src = path.join(__dirname, 'files');
const dest = path.join(__dirname, 'files_copy');

export const copy = async () => {
    fs.mkdir(dest, err => {
        if (err){
          throw Error('FS operation failed');
        }
    })

    fs.readdir(src, (err, files) => {
        files.forEach(file => {
            fs.copyFile(path.join(src, file), path.join(dest, file), err => {
                if (err){
                    throw Error('FS operation failed');
                }
            });
        });
    });
}