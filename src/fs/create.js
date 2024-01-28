// implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
import { writeFile, readdir } from 'node:fs/promises';

const create = async () => {
    const files = await readdir('files')
    if (files.includes('fresh.txt')) {
        throw new Error('FS operation failed')
    } else  {
        writeFile('files/fresh.txt', 'I am fresh and young ')
    }
};

await create();