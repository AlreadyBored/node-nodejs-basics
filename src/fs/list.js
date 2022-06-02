import { readdir } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fsException, folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootFolderName = path.join(__dirname, folderName);

export const list = async () => {
    readdir(rootFolderName, (err, files) => {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
        console.log(files);
    });
};

list();