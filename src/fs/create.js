import * as fs from 'fs';

const create = async () => {
    const path = 'src/fs/files/fresh.txt';
    const content = 'I am fresh and young';

    fs.writeFile(path, content, { flag: 'wx' }, (err) => {
        if (err) {
            console.log("FS operation failed", err);
        }
    });
};

await create();