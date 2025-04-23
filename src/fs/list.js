import fs from 'fs';

const list = async () => {
    // Write your code here 
    try {
        fs.readdir('./src/fs/files', (err, files) => {
            if (err) throw new Error('FS operation failed');
            console.log(files)
        })
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();