import fs from 'fs/promises';

const remove = async () => {
    try {
        // Delete 'fileToRemove.txt' file
        await fs.unlink('./files/fileToRemove.txt');
        console.log("'fileToRemove.txt' file is deleted");
    } catch (err) {
        //  Catch existence error
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await remove();
