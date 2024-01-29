import fs from 'fs';

const copy = async () => {
    const source = './src/fs/files';
    const destination = './src/fs/files_copy';
    fs.cp(source, destination, { recursive: true, errorOnExist: true, force: false }, (err) => {
        if (err) throw Error('FS operation failed');
        console.log('Copied!');
    });
};


await copy();
