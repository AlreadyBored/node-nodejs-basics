import { readdir } from 'fs';
import { fsException, folderName } from '../constants.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootFolderName = `${__dirname}/${folderName}`;

export const list = async () => {
    readdir(rootFolderName, (err, files) => {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
        console.log(files);
    });
};

list();