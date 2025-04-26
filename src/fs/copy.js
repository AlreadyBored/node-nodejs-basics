import fs from 'node:fs/promises';

// copy.js - implement function that copies folder files files
// with all its content into folder files_copy at the same level
// (if files folder doesn't exist or files_copy has already been
// created Error with message FS operation failed must be thrown)

const copy = async () => {
    // Write your code here
    const initialPath = './files';
    const copyPath = initialPath + '_copy';

    try {
        await fs.access(initialPath);
        try {
            await fs.access(copyPath);
            throw new Error('files_copy folder already exist');
        } catch (error) {
            await fs.mkdir(copyPath);
            const dirContent = await fs.readdir(initialPath);

            for (let file of dirContent) {
                await fs.copyFile(
                    initialPath + '/' + file,
                    copyPath + '/' + file
                );
            }
        }
    } catch (error) {
        console.error('FS operation failed', error);
    }
};

await copy();
