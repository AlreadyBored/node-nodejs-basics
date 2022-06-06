import fs from 'fs';

export const create = async () => {
    fs.access('./files/fresh.txt', (err) => {
        if (!err) throw Error('FS operation failed');
    });
    fs.writeFile('./files/fresh.txt', 'I am fresh and young', () => {})
};

create()