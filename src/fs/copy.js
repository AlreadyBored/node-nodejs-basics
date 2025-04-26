import fs from 'fs';
import path from 'path';
import promises from 'fs/promises';

const copy = async (srcPath = './src/fs', destPath = './src/fs', folder = 'files', folderCopy = 'files_copy', errorText = 'FS operation failed') => {
    const srcFolder = path.join(srcPath, folder);
    const destFolder = path.join(destPath, folderCopy);

    if (fs.existsSync(destFolder)) {
        throw new Error(errorText);
    }

    promises.cp(srcFolder, destFolder, { recursive: true}, () => {});
};

await copy();
