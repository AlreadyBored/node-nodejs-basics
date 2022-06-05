import {readFile} from 'fs/promises';

export const read = async () => {
    const result = await readFile('src/fs/files/fileToRead.txt', {encoding: 'utf8'});

    console.log(result);
};

read().catch(() => console.log('fileToRead.txt does not exist'));
