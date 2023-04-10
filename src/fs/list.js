import fs from 'fs/promises';

const list = async () => {
    try {
        //  Get filenames from inside 'files' directory
        const fileNames = await fs.readdir('./files');

        //  Print filenames
        fileNames.forEach((fileName) => console.log(fileName));
    } catch (err) {
        //  Catch existence error
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await list();
