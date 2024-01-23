import fs from 'fs';
import path from 'path';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filename = path.join(dirname, 'files', 'fileToRead.txt');

const read = async () => {
    fs.readFile(filename, 'utf-8' ,(err, data) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        console.log(data);
      }); 
};

await read();