import * as fs from 'fs';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files');
const list = async () => {
    fs.readdir(FilePath, (err, files) => {
        if (err) throw Error('FS operation failed');
        files.forEach(file => {
          console.log(file);
        });
    });
};

await list();