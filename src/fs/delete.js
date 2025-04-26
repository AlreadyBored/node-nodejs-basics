import fs from 'fs';
import path from 'path';

const remove = async (srcPath = './src/fs/files', fileName = 'fileToRemove.txt', errorText = 'FS operation failed') => {
    const filePath = path.join(srcPath, fileName);

    fs.unlink(filePath, (err) => {
        if (err) {
            throw new Error(errorText);
        }
    });
};

await remove();
