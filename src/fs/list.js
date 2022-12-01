import fs from 'fs';

const list = async () => {
    fs.readdir('src/fs/files', 'utf-8', (err, data) => {
        if (err) throw console.error('Error: FS operation failed');
        console.log(data);
    }) 
};

await list();