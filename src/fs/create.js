import { access, appendFile } from "node:fs/promises";

const create = async () => {
    const path = './src/fs/files/fresh.txt';

    try {
        await access(path);
        throw new Error('FS operation failed');
    } catch (err) {
        if(err.message !== 'FS operation failed') {
            await appendFile(path, 'I am fresh and young');
        } else {
            throw err;
        }
    }
};

await create();