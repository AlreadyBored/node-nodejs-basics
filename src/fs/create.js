import { writeFile, access } from 'fs/promises';

const create = async () => {
    try {
        await access('files/fresh.txt');
        console.log('FS operation failed');
    } catch (err) {
        await writeFile('files/fresh.txt', 'I am fresh and young');
        console.log('File created');
    }
};

await create();