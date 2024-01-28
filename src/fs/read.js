import fs from "fs/promises";

const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt';

    try {
        const content = await fs.readFile(filePath, 'utf8');

        console.log(content);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        } else {
            throw err;
        }
    }
};

await read();