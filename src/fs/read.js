import * as fs from 'fs/promises';

export const read = async () => {
    fs.readFile('fs/files/fileToRead.txt','utf8')
        .catch(() =>  console.log(new Error("\x1b[31m FS operation failed")));
};

read()