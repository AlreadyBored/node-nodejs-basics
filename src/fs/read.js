import fs from 'fs';

const read = async () => {
    // Write your code here 
    try {
        fs.readFile('./src/fs/files/fileToRead.txt', 'utf8', (err, content) => {
            if (err) throw new Error('FS operation failed');
            console.log(content);
        })
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();