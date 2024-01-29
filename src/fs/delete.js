import fs from 'fs';

const remove = async () => {
    if (fs.existsSync('src/fs/files/fileToRemove.txt')) fs.unlink('src/fs/files/fileToRemove.txt', error => error && console.log(error));
    else console.log(new Error('FS operation failed'));
};

await remove();