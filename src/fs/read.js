import fs from 'fs/promises';

const read = async () => {
    try {
        // Read 'fileToRead.txt' file
        const content = await fs.readFile('./files/fileToRead.txt', {
            encoding: 'utf8',
        });

        // Print the content
        console.log(content);
    } catch (err) {
        //  Catch existence error
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await read();
