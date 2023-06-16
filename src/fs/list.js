import { readdir } from 'node:fs/promises';

export const list = async () => {
    const errorMessage = 'FS operation failed';

    try {
        const allFiles = await readdir('./src/fs/files');
        console.log(allFiles)

    } catch (error) {
        throw new Error(errorMessage);
    }
};

list();