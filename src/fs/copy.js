const copy = async () => {
    const fs = require('fs').promises;
    const path = require('path');
    const sourceFolder = path.join(__dirname, 'files');
    const destinationFolder = path.join(__dirname, 'files_copy');
    
    try {
        // Check if the source folder exists
        await fs.access(sourceFolder);

        // Check if the destination folder already exists
        await fs.access(destinationFolder);

        console.log('FS operation failed')
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log('FS operation failed')
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
};

await copy();