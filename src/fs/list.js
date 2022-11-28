import * as fs from 'fs';

const list = async () => {
    const folder = 'src/fs/files';

    fs.readdir(folder, (err, files) => {
        if (err) {
            console.log("FS operation failed", err);
        }

        files?.forEach(file => {
            console.log(file);
        });
    });
};

await list();