import fs from 'node:fs/promises';

// read.js - implement function that prints content of the fileToRead.txt
// into console (if there's no file fileToRead.txt Error with message
// FS operation failed must be thrown)

const read = async () => {
    // Write your code here
    const pathToFolder = './files';
    const fileName = 'fileToRead.txt';
    const pathToFile = `${pathToFolder}/${fileName}`;

    const errorMessage = 'FS operation failed';

    try {
        fs.access(pathToFile);
        const contents = await fs.readFile(pathToFile, { encoding: 'utf8' });
        console.log(contents);
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await read();
