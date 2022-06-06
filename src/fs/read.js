import { readFile } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { fsException, folderName } from '../constants.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootFolderName = path.join(__dirname, folderName);

export const read = async () => {
    readFile(path.join(rootFolderName, 'fileToRead.txt'), 'utf8', function(err, content) {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
        console.log(content);
    });
};

read();