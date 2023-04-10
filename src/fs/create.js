import fs from 'fs/promises';

const create = async () => {
    try {
        // Creating 'fresh.txt' file for writing
        await fs.writeFile('./files/fresh.txt', 'I am fresh and young', {
            flag: 'wx', // Fails if the file 'fresh.txt' exists
        });
        console.log(
            "'fresh.txt' file created with the content 'I am fresh and young'"
        );
    } catch (err) {
        //  Catch existence error
        if (err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await create();
