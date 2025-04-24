import { cp } from 'node:fs/promises';

const FROM = './src/fs/files/';
const TO = './src/fs/files_copy/';

const copy = async () => {
    try {
        await cp(FROM, TO, {errorOnExist: true, force: false, recursive: true});
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
