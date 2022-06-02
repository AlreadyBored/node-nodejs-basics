import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fsException, folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootFolderName = path.join(__dirname, folderName);
const pathToRenamedFile = path.join(rootFolderName, 'wrongFilename.txt');
const pathToNewNameFile = path.join(rootFolderName, 'properFilename.md');

export const rename = async () => {
    fs.rename(pathToRenamedFile, pathToNewNameFile, (err) => {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
    });
};

rename();