import { writeFile } from 'node:fs/promises';

const FILENAME = './src/fs/files/fresh.txt';

const create = async () => {
    try {
        const content = 'I am fresh and young';
        await writeFile(FILENAME, content, {flag: 'wx'});
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await create();