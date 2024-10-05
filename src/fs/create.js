import { readFile, writeFile } from 'node:fs/promises';

const create = async () => {
    try {
        const file = await readFile('./files/fresh.txt');
        const error = new Error('FS operation failed');
        console.log(error);
    } catch {
        const file = await writeFile(
            './files/fresh.txt',
            'I am fresh and young'
        );
    }
};

await create();
