import fs from 'fs';

const list = async () => {

    if (!fs.existsSync('./src/fs/files')) {
        throw new Error('FS operation failed');
    }

    fs.readdir('./src/fs/files', (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            console.log(file);
        });

    });
};

await list();