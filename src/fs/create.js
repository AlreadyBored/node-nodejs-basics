import { access, writeFile } from 'fs/promises';

export const create = async () => {
    let isNewFileExist;

    try {
        await access('./files/');
    } catch {
        throw new Error('FS operation failed');
    }

    try {
        await access('./files/newfile.txt');
        isNewFileExist = true
    } catch {
        isNewFileExist = false
    }

    if(isNewFileExist) {
        throw new Error('FS operation failed');
    } else {
        writeFile('./files/newfile.txt', 'I am fresh and young', function (err) {
            if (err) throw err;
        })
    }
};
