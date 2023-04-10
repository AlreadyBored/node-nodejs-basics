import fs from 'fs/promises';

const rename = async () => {
    try {
        //  Check 'properFilename.md' file exists
        const fileNames = await fs.readdir('./files');
        if (fileNames.includes('properFilename.md')) {
            throw new Error('FS operation failed');
        }

        //  Rename 'wrongFilename.txt' to 'properFilename.md'
        await fs.rename(
            './files/wrongFilename.txt',
            './files/properFilename.md'
        );

        console.log('Successfully renamed');
    } catch (err) {
        //  Catch existence error
        if (err.code === 'ENOENT' || err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await rename();
