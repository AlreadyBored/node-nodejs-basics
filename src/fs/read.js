import { readFile } from 'node:fs';

const read = async () => {
    readFile('./files/fileToRead.txt', { encoding: 'utf8' }, function (err, data) {
        if (err) {
            if (err.code === 'ENOENT') {
                throw 'FS operation failed';
            }
            
            throw err;
        }

        console.log(data);
    })
};

await read();