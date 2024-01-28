import fs from "fs/promises";

const list = async () => {
    const dirPath = 'src/fs/files';

    try {
        await fs.access(dirPath);

        const files = await fs.readdir(dirPath);
        console.log(files);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await list();