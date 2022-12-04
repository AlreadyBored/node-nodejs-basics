import { readdirSync, existsSync } from 'fs';

const list = async (dir) => {
    try {
        if (!existsSync(dir)) {
            throw 'FS operation failed';
        }
        const fileNames = [];
        readdirSync(dir).forEach(file => {
            fileNames.push(file);
        });
        console.log(fileNames);

    } catch (err) {
        console.error(err);
    }
};

await list('./files');