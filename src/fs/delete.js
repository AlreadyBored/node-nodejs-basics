const fs = require('fs').promises;

const remove = async () => {
    try {
        await fs.unlink('fileToRemove.txt');
    } catch (error) {
        console.error('fileToRemove.txt Error: FS operation failed');
    }
};

await remove();
