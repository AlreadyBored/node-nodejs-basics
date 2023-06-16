import { readdir } from 'node:fs/promises';

const list = async () => {
    const errorMessage = 'FS operation failed';

    try {
        const allFiles = await readdir('./src/fs/files');
        console.log(allFiles)

    } catch (error) {
        throw new Error(errorMessage);
    }
};

await list();