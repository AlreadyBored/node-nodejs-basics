import { unlink } from 'node:fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { folderName, fsException } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const removeFilePath = path.join(__dirname, folderName, 'fileToRemove.txt');

export const remove = async () => {
    unlink(removeFilePath, err => {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
    });
};

remove();