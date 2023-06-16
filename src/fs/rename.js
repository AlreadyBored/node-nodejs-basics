import fs from "fs/promises";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const oldFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFile = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    fs.access(oldFile).catch(() => {
        throw new Error('FS operation failed');
    });
    fs.access(newFile).then(() => {
        throw new Error('FS operation failed');
    }).catch((error) => {
        if (error.code) fs.rename(oldFile, newFile);
        else console.log(error);
        return;
    }); 
};

await rename();