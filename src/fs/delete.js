const remove = async () => {
    const fs = require('fs').promises;
    const path = require('path');
    const filePath = path.join(__dirname, 'fileToRemove.txt');

    try {
        await fs.access(filePath);
        await fs.unlink(filePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();

/* delete.js - implement function that deletes file fileToRemove.txt
* (if there's no file fileToRemove.txt Error with message
* FS operation failed must be thrown) */