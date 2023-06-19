import fs from 'fs';

const create = async () => {

    if (fs.existsSync('./src/fs/files/fresh.txt')) {
        throw new Error('FS operation failed');
    }

    fs.appendFile('./src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
        if (err) throw err;
        console.log('success!')
    });
};

await create();