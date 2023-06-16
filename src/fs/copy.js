import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const folderPath = path.join(__dirname, 'files');
const newFolderPath = path.join(__dirname, 'copy_files');

const copy = async () => {
    fs.access(folderPath).catch(() => {
        throw new Error('FS operation failed');
    });
    fs.access(newFolderPath).then(() => {
        throw new Error('FS operation failed');
    }).catch((error) => {
        if (error.code) fs.cp(folderPath, newFolderPath, { recursive: true });
        else console.log(error);
    });

    // fs.cp(folderPath, newFolderPath, { recursive: true }, (err) => {
    //     if (err) {
    //       console.error(err);
    //     }
    // });
};

await copy();
