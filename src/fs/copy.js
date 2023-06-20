import { cp } from 'fs/promises';

const copy = async () => {
    try {
        const path = './src/fs/files/';
        const newPath = './src/fs/files_copy/';
        await cp(path, newPath, {
            force: false,
            errorOnExist: true,
            recursive: true,
        });
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

copy();
