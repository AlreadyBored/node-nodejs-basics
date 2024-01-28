const read = async () => {
    const fs = require('fs');

    try {
        const fileContent = await fs.promises.readFile('fileToRead.txt', 'utf8');
        console.log(fileContent);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw error; // Good practice
        }
    }
};

await read();

/* read.js - implement function that prints content of the fileToRead.txt into
* console (if there's no file fileToRead.txt Error with message
* FS operation failed must be thrown) */