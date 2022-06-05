import * as fs from 'fs';

export const read = async () => {
    try {
        fs.access('./src/fs/files/fileToRead.txt', (err) => {
            if (err) {
                throw new Error('FS operation failed');
            } else {
                fs.readFile('./src/fs/files/fileToRead.txt', (error, data) => {
                    if (error) {
                        throw error;
                    } else { 
                        console.log(data.toString());
                    } 
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
};

await read();