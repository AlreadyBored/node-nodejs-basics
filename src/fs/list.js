const fs = require('fs').promises;
const path = require('path');

const list = async () => {
    const directoryPath = path.join(__dirname, 'files');
    
    try {
        const files = await fs.readdir(directoryPath);
        console.log(files);
    } catch (error) {
        console.error('Error: FS operation failed');
    }
};

await list();
