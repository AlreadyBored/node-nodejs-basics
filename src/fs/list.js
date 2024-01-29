import * as fs from 'fs';

const errorMessage = 'FS operation failed';

const list = async () => {
    await fs.promises.readdir('src/fs/files').then((files) => {
        for (let file of files) {
            console.log(file);
        }
    }).catch(() => console.log(errorMessage));
};

await list();