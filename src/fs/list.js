import { readdir, access, constants } from 'node:fs/promises';
const list = async () => {
    try {
        await access('src/fs/files', constants.R_OK);
        const files = await readdir('src/fs/files');
        console.log(Array.from(files));
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();