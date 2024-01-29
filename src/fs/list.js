const fs = require('fs');
const path = require('path');

const list = async () => {
    // Write your code here 
    const folderPath = path.join(__dirname, 'files');

    try {
        await fs.access(folderPath);

        const files = await fs.readdir(folderPath);
        console.log('List of filenames in the "files" folder:', files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();