import fs from 'fs';
import path from 'path';
import { getDir } from '../utils/getDir.js';

const dirname = getDir(import.meta.url);
const filesDir = path.join(dirname, 'files');

const list = async () => {
    fs.readdir(filesDir, (err, files) => {
        if(err) {
            throw new Error('FS operation failed');
        }
        files.forEach(file => {
          console.log(file);
        });
      });
};

await list();