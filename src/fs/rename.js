import fs from "fs/promises";

const rename = async () => {
    const oldPathFile = 'src/fs/files/wrongFilename.txt';
    const newPathFile = 'src/fs/files/properFilename.md';

    try {
        await fs.access(oldPathFile);
    } catch (err) {
        if (err.code === 'ENOENT') {
            throw new Error('File wrongFilename.txt does not exist');
        } else {
            throw err;
        }
    }

    try {
        await fs.access(newPathFile);
        throw new Error('File properFilename.md already exists');
    } catch (err) {
        if (err.code !== 'ENOENT') {
            throw err;
        }
    }

    await fs.rename(oldPathFile, newPathFile);
};

await rename();