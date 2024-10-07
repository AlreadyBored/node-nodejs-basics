import fs from 'fs';

const list = async () => {
    fs.readdir('./files', (err, files) => {
        if (files) {
            console.log(files);
        }
        if (err?.code === 'ENOENT') {
            throw Error ('FS operation failed');
        }        
    })
};

await list();