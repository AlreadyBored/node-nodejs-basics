import fs from 'fs';
import path from 'path';

const rename = async (srcPath = 'src/fs/files', fileName = 'wrongFilename.txt', fileRenamed = 'properFilename.md', errorText = 'FS operation failed') => {
    const filePath = path.join(srcPath, fileName);
    const fileNewPath = path.join(srcPath, fileRenamed);

    fs.rename(filePath, fileNewPath, (err) => {
        if (err) {
            throw new Error(errorText);
        }
    });
};

await rename();
