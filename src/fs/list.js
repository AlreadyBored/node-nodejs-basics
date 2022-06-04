import * as fs from 'fs/promises';

export const list = async () => {
    fs.readdir('fs/files')
        .catch(() =>  console.log(new Error("\x1b[31m FS operation failed")));
};

list()