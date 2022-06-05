import fs, {access} from 'fs/promises';
import {checkFileExists} from './utils.js';

export const rename = async () => {
    const isOldFileExist = await checkFileExists('src/fs/files/wrongFilename.txt');
    const isNewFileAlrearyExist = await checkFileExists('src/fs/files/properFilename.md');
    
    if (!isOldFileExist || isNewFileAlrearyExist) {
        throw new Error('FS operation failed');
    }

    await fs.rename('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md');
};

rename()
    .catch(() => console.log('properFilename.md already exists or wrongFilename.txt has already been deleted'));
