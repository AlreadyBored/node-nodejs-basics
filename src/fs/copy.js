import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filesPath = path.join(__dirname, 'files');
const filesCopyPath = path.join(__dirname, 'files_copy');

fs.mkdir(filesCopyPath, { recursive: false }, (err) => {
    if (err) throw ('FS operation failed');
  }
);

export const copy = async () => {
    fs.readdir(filesPath, { withFileTypes: true }, (err, files) => {
        if(err) throw ('FS operation failed');

        files.forEach((file) => {
            if(file.isFile()) {
                fs.copyFile(`${filesPath}/${file.name}`, `${filesCopyPath}/${file.name}`, (err) => {
                    if(err) throw err;
                });
            }
        });
    });
};

copy();
