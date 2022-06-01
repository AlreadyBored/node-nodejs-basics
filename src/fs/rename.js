import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fsException, folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootFolderName = `${__dirname}/${folderName}`;

export const rename = async () => {
    fs.rename(`${rootFolderName}/wrongFilename.txt`, `${rootFolderName}/properFilename.md`, (err) => {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
    });
};

rename();