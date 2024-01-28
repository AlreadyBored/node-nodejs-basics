import fs from "fs/promises";

const rename = async () => {
    const oldPathFile = 'src/fs/files/wrongFilename.txt';
    const newPathFile = 'src/fs/files/properFilename.md';

    let fileExists = false;

    try {
        await fs.access(oldPathFile);
        fileExists = true;

        await fs.access(newPathFile);
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    if (fileExists) {
        throw new Error('FS operation failed');
    } else {
        await fs.rename(oldPathFile, newPathFile);
    }
};

await rename();