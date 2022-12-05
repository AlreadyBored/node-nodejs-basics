import { readdir } from 'fs';

const list = async () => {
    const path = './files'
    await readdir(path, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        };
        console.log(files);
    });
};

await list();