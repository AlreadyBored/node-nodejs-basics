import fs from 'fs/promises';

const copy = async () => {
    try {
        // Create 'files_copy' directory
        await fs.mkdir('./files_copy');
        console.log("'files_copy' directory created");

        // Get filenames from inside 'files' directory
        const fileNames = await fs.readdir('./files');

        // Copy files from 'files' directory to 'files_copy' directory
        fileNames.forEach(async (fileName) => {
            await fs.copyFile(
                `./files/${fileName}`,
                `./files_copy/${fileName}`
            );
        });

        console.log("Copied all files from './files' to './files_copy'");
    } catch (err) {
        //  Catch existence error
        if (err.code === 'EEXIST' || err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await copy();
