import {writeFile} from 'fs/promises';
import {checkFileExists} from './utils.js';

const CONTENT = 'I am fresh and young';

export const create = async () => {
    const isAlreadyExist = await checkFileExists('src/fs/files/fresh.txt');

    if (isAlreadyExist) {
        throw new Error('FS operation failed');
    }

    await writeFile('src/fs/files/fresh.txt', CONTENT);
};

create()
    .then(() => console.log('file was created'))
    .catch((err) => console.log('Please, delete fresh.txt'));
