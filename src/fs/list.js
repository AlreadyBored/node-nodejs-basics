import fs from 'node:fs';
import path from 'path';
const list = async () => {
    const dirPath = path.join('fs', 'files');
    fs.readdir(dirPath, (err, files) => {
        if(err) throw new Error('FS operation failed');

        files.forEach(file => {
          console.log(file);
        })
    });
};

await list();