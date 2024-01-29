const fs = require('fs').promises;
const path = require('path');

const remove = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'fileToRemove.txt');

    try {
        await fs.access(filePath);

        await fs.unlink(filePath);

        console.log('File deleted successfully');
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await remove();