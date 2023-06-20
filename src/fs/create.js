import { writeFile } from 'fs/promises';

const create = async () => {
    try {
        const content = 'I am fresh and young';
        const path = './src/fs/files/fresh.txt'
        await writeFile(path, content, { flag: 'wx' });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await create();