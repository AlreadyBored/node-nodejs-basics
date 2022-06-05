import {mkdir, readdir, copyFile} from 'fs/promises';
import {checkFileExists} from './utils.js';

export const list = async () => {
    const files = await readdir('src/fs/files');
    console.log(files);
};

list().catch(() => console.log('files does not exist or it is not directory'));
