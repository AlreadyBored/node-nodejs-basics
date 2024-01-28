import { existsSync, rm } from 'node:fs';

const remove = async () => {
    if (!existsSync('./files/fileToRemove.txt')) {
        throw 'FS operation failed';
    }
       
    rm('./files/fileToRemove.txt', function (err) {
        if (err) throw err;
    });
};

await remove();