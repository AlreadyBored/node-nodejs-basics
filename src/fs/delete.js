import {rm} from 'fs/promises';
import {checkFileExists} from './utils.js';

export const remove = async () => {
    const isFileExist = await checkFileExists('src/fs/files/fileToRemove.txt');

    if (!isFileExist) {
        throw new Error('FS operation failed');
    }

    await rm('src/fs/files/fileToRemove.txt');
};

remove()
    .then(() => console.log('The file was deleted successfully'))
    .catch(() => console.log('The file has already been deleted'));
