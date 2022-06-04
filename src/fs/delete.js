import * as fs from 'fs/promises';
export const remove = async () => {
    fs.unlink('./fs/files/fileToRemove.txt')
        .catch(() =>  console.log(new Error("\x1b[31m FS operation failed")));
};
remove()