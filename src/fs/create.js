import * as fs from 'fs';

const create = async () => {
    await fs.promises.writeFile('src/fs/files/fresh.txt', 'I am fresh and young', {flag: 'ax'}).catch((err) => {
        console.log('FS operation failed');
    });
};

await create();