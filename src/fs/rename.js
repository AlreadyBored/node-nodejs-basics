const rename = async () => {
    const fs = require('fs');
    const path = require('path');

    const oldPath = path.join(__dirname, 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'properFilename.md');

    try {
        await fs.promises.access(oldPath, fs.constants.F_OK);
        await fs.promises.access(newPath, fs.constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.promises.rename(oldPath, newPath);
        } else {
            throw error; // In case necessary
        }
    }
};

await rename();