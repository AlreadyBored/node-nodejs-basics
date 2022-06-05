import fs from 'fs';

export const create = async () => {
    if (fs.existsSync('./files/fresh.txt')) {
        throw new Error('FS operation failed');
    }
    fs.open('./files/fresh.txt', 'w', err => {
        if (err) throw err;
        fs.writeFile('./files/fresh.txt', 'I am fresh and young', err => {
            if (err) throw err;
        });
    });
};

await create();