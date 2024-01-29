import fs from 'fs';

const create = async () => {
    const content = 'I am fresh and young';
    const filePath = './src/fs/files/';
    const fileName = 'fresh.txt';
    fs.writeFile(filePath + fileName, content, { flag: 'wx' }, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await create();