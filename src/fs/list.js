import { existsSync as exists } from 'fs';
import fsAsync from 'fs/promises';

const directory = `${import.meta.dirname}/files/`;

const list = async () => {
    if (!exists(directory)) {
        throw Error('FS operation failed');
    }

    (await fsAsync.readdir(directory)).forEach(fileName => console.log(fileName));
};

await list();