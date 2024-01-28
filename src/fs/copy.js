const copy = async () => {
    const fs = require('fs').promises;
    const path = require('path');
    const sourceFolder = path.join(__dirname, 'files');
    const destinationFolder = path.join(__dirname, 'files_copy');

    try {
        // Check if the sourceFolder exists
        await fs.access(sourceFolder, fs.constants.F_OK);

        // Create destinationFolder only if it doesn't exist yet
        await fs.mkdir(destinationFolder, { recursive: true });

        // Copy files and folders recursively
        await fs.promises.copy(sourceFolder, destinationFolder, { recursive: true });

        console.log('Files copied successfully');
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed: Source folder does not exist');
        } else if (error.code === 'EEXIST') {
            throw new Error('FS operation failed: Destination folder already exists');
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
};

await copy();