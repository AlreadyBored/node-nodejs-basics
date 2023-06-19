import fs from 'fs';

const remove = async () => {

    if (!fs.existsSync('./src/fs/files/fileToRemove.txt')) {
        throw new Error('FS operation failed');
    }

    fs.unlink('./src/fs/files/fileToRemove.txt', (err) => {
        if (err) throw err;
        console.log('success!')
    });
};

await remove();