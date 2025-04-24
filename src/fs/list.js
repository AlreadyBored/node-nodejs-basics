import { readdir } from 'node:fs/promises';

const PATH = './src/fs/files/';

const list = async () => {
    try {
        const files = await readdir(PATH);
        files.forEach(file => {
            console.log(file);
        })
    }  catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();