import { readdir } from 'node:fs';

const list = async () => {
    readdir('./files', function (err, files) {
        if (err) {
            if (err.code === 'ENOENT') {
                throw 'FS operation failed';
            }
            
            throw err;
        }

        console.log(files);
    });
};

await list();