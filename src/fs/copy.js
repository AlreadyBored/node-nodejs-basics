import fs from 'fs';

const copy = async () => {

    if (!fs.existsSync('./src/fs/files') || fs.existsSync('./src/fs/files_copy')) {
        throw new Error('FS operation failed');
    }

    fs.cp('./src/fs/files', './src/fs/files_copy', { recursive: true }, (err) => {
        if (err) throw err;
        console.log('success!')
    });
};

await copy();
