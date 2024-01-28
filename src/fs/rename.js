const rename = async () => {
    const fs = require('fs').promises;
    const path = require('path');

    const oldPath = path.join(__dirname, 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'properFilename.md');

    try {
        // Check if wrongFilename.txt exists
        await fs.access(oldPath, fs.constants.F_OK);
        
        // Check if properFilename.md exists
        try {
            await fs.access(newPath, fs.constants.F_OK);
            // If yes, throws error ahead
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw error; // Just in case
            }
        }
    }

    try {
        await fs.promises.access(oldPath, fs.constants.F_OK);
        await fs.promises.access(newPath, fs.constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await fs.promises.rename(oldPath, newPath);
        } else {
            throw error;
        }
    }
};

await rename();