import * as fs from 'fs';

export const create = async () => {
    try {
        fs.access('./src/fs/files/fresh.txt', (err) => {
            if (!err) {
                throw new Error('FS operation failed');
            } else {
                fs.writeFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
                    if(err) {
                        throw err;
                    }
                });
            }
        });
    } catch (e) {
        console.log(e);
    }
};
