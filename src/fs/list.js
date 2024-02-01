import fs from 'fs';


const list = async () => {
    fs.readdir('src/fs/files', (err, data) => {
        if (err) {
            console.error('FS operation failed');
        } else {
            console.log(data);
        }
    })
};

await list();