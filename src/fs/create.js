import fs from 'fs';

const create = async () => {
    const filePath = 'src/fs/files/fresh.txt'
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (!err) throw new Error('FS operation failed');
    });
    fs.writeFile(filePath, 'I am fresh and young', (err) => {
        if (err) throw err;
    });
};

await create();
