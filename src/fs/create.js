import fs from "fs/promises";

const create = async () => {
    const filePath = 'src/fs/files/fresh.txt';
    const text = 'I am fresh and young';

    let fileExists = true;

    try {
        await fs.access(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            fileExists = false;
        } else {
            throw err;
        }
    }

    if (fileExists) {
        throw new Error('FS operation failed');
    } else {
        await fs.writeFile(filePath, text);
    }
};

await create();