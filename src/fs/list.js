import {readdir} from 'node:fs';

const list = async () => {
    // Write your code here 
    const dirPath = './src/fs/files';
    readdir(dirPath, (err, files) => {
        if (err) {
            throw Error('FS operation failed');
        };

        files.forEach(file => {
            console.log(file);
        });
    });
};

await list();