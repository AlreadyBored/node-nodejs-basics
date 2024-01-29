import fs, { existsSync } from 'fs';

const create = async () => {
    if (fs.existsSync('./files/fresh.txt')) {
        throw new Error('FS operation failed');
    } else {
        fs.writeFileSync('./files/fresh.txt', 'I am fresh and young');
    }
};

await create();