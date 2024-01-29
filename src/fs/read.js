import fs, { existsSync } from 'fs';

const read = async () => {
     try {
        if (!fs.existsSync('./files/fileToRead.txt')) {
            throw new Error('FS operation failed');
        } else {
            const data = fs.readFileSync('./files/fileToRead.txt', 'utf8');
            console.log(data);
        }
     } catch (err) {
        console.error('Something went wrong!');
     }
};

await read();