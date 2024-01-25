import fs from 'fs';

const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt'
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) throw new Error('FS operation failed');
    });
    fs.unlink(filePath, (err) => {
        if (err) throw err;
    });
};

await remove();
