import fs from 'fs';

export const read = async () => {
    if (fs.existsSync('./files/fileToRead.txt')) {
        fs.readFile('./files/fileToRead.txt', (err, buffer) => {
            if (err) throw err;
            console.log(buffer.toString());
        });
    }
    else throw Error('FS operation failed');
};

await read();