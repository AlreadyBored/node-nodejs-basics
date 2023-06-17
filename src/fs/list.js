import {readdir} from 'node:fs/promises';

const list = async () => {
    // Write your code here
    try {
        const sourceFolder = './src/fs/files';
        const files = await readdir(sourceFolder);

        console.log(files);
    } catch (error) {
        console.log('FS operation failed');
    }

};

await list();