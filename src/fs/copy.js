import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const copy = async () => {
    // Write your code here
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.access(path.resolve(__dirname, 'files'), (err) => {
        if (err) {
            console.log('FS operation failed' + 'folder files was deleted');
        }
    });
    fs.mkdir(path.resolve(__dirname, 'files-copy'), (err) => {
        if (err) {
            console.log('FS operation failed ' + 'folder files-copy earlier was created')
        }
    });
    fs.readdir(path.resolve(__dirname, 'files'), (err, files) => {
        if (err) {
            console.log(err);
        }
        files.forEach((file) => {
            let copy_file = file;
            fs.copyFile(path.resolve(__dirname, 'files', file), path.resolve(__dirname, 'files-copy', copy_file), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        });
    })
};

await copy();
