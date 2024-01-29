import fs from 'fs';

const list = async () => {
    if (fs.existsSync('src/fs/files')) {
        fs.readdir('src/fs/files', (error, files) => {
            error && console.log(error);
            files.forEach(file => console.log(file));
        })
    } else {
        console.log(new Error('FS operation failed'));
    }
};

await list();