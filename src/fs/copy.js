import * as fs from 'fs';
import  * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const copy = async () => {
    const pathToSourceDir = path.join(__dirname, '/files');

    fs.access(pathToSourceDir, fs.constants.F_OK, (err) => {
        if (err) {
            console.log(`The directory "${pathToSourceDir}" does not exists`);
            throw new Error('FS operation failed');
        }
    });

    const pathToDestDir = path.join(__dirname, '/files_copy');

    fs.access(pathToDestDir, fs.constants.F_OK, (err) => {
        if (!err) {
            console.log(`The directory "${pathToDestDir}" already exists`);
            throw new Error('FS operation failed');
        }
    });

    fs.mkdir(pathToDestDir, { recursive: true }, (err) => {
        if (err) throw new Error('FS operation failed');
    });

    fs.readdir(pathToSourceDir, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            const sourceFile = path.join(pathToSourceDir, file);
            const destFile = path.join(pathToDestDir, file);
            const readableStream = fs.createReadStream(sourceFile, 'utf-8');
            const writableStream = fs.createWriteStream(destFile, 'utf-8');
            readableStream.on('data', chunk => writableStream.write(chunk));
            readableStream.on('error', error => {throw error});
        });
    });
};

copy();
