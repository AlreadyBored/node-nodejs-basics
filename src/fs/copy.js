import { mkdir, cp } from 'node:fs/promises';
const error = new Error('FS operation failed');

const copy = async() => {
    try {
        await mkdir('./fs/files_copy');
        await cp('./fs/files', './fs/files_copy', { errorOnExist: true, force: false, recursive: true });
    } catch (err) {
        console.error(error.message);
    }
};

copy();