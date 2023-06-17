// copy.js - implement function that copies folder files files with all its content into folder files_copy
// at the same level (if files folder doesn't exists or files_copy has already been created Error with
// message FS operation failed must be thrown)
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    const filesDir = path.join(__dirname, 'files');
    fs.stat(filesDir, (err, stats) => {
        if (err && err.code === 'ENOENT') {
            throw new Error("FS operation failed");
        }
        if (!stats.isDirectory()) {
            throw new Error(filesDir + " is not a directory.");
        }
    });
    fs.access(filesDir, fs.constants.R_OK, (err) => {
        if (err) {
            throw new Error(filesDir + " is not readable.");
        }
    });

    const filesCopyDir = path.join(__dirname, 'files_copy');
    fs.access(filesCopyDir, fs.constants.F_OK, (err) => {
        if (err === null) {
            throw new Error("FS operation failed");
        }
    });

    fs.mkdir(filesCopyDir, { recursive: true }, (err) => {
        if (err) throw err;
    });

    fs.readdir(filesDir, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }
        files.forEach((file) => {
            const srcPath = path.join(filesDir, file);
            const dstPath = path.join(filesCopyDir, file);
            fs.copyFile(srcPath, dstPath, (err) => {
                if (err) throw err;
            });
        });
    });
};

await copy();
