import fs from "fs/promises";

const remove = async () => {
    const filePath = 'src/fs/files/fileToRemove.txt';

    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await remove();