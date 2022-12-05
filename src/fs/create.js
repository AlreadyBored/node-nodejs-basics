import fs from 'fs';

const create = async () => {
    const path = './src/fs/files/fresh.txt';

    if (fs.existsSync(path)) {
        throw new Error ('FS operation failed');
    }
    fs.appendFile(path, 'I am fresh and young', error => {});
};

await create();