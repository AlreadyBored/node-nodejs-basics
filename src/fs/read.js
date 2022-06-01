import { readFile } from 'fs';
import { fsException, folderName } from '../constants.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootFolderName = `${__dirname}/${folderName}`;

export const read = async () => {
    readFile(`${rootFolderName}/fileToRead.txt`, 'utf8', function(err, content) {
        if (err) throw (err?.code === 'ENOENT' ? new Error(fsException) : err);
        console.log(content);
    });
};

read();