import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    // Write your code here 
    const originPath = `${__dirname}/files/`;
    const newPath = `${__dirname}/files_copy/`;

    const prAccess = promisify(fs.access);
    const prMkdir = promisify(fs.mkdir);
    const prReaddir = promisify(fs.readdir);
    const prCopyFile = promisify(fs.copyFile);

    try {
        await prAccess(originPath, fs.constants.F_OK);
    }
    catch (err) {
        throw new Error('FS operation failed');
    }

    try {
        await prAccess(newPath, fs.constants.F_OK);
        throw new Error('FS operation failed')
    }
    catch (err) {
        if (err.message === 'FS operation failed') {
            throw err
        } else {
            const files = await prReaddir(originPath, {encoding: 'utf-8'});
            await prMkdir(newPath);
            files?.forEach(async (fileName) => {
               await prCopyFile(`${originPath}${fileName}`, `${newPath}${fileName}`);
            })
        }
    }
};

copy();