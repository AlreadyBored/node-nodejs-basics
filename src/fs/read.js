import {readFile} from 'node:fs/promises';

const read = async () => {
    // Write your code here 
    try {
        const fileToRead = './src/fs/files/fileToRead.txt';
        const data = await readFile(fileToRead, 'utf-8');

        console.log(data)
    } catch (error) {
        console.log('FS operation failed');
    }
};

await read();