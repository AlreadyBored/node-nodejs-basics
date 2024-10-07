const fs = require('fs').promises;

const rename = async () => {
    try {
        await fs.access('wrongFilename.txt'); 
        await fs.access('properFilename.md');
        console.error('Error: properFilename.md already exists');
        return;
    } catch (err) {

        if (err.code !== 'ENOENT') {
            console.error('Error: FS operation failed');
            return;
        }
    }

    try {
        await fs.rename('wrongFilename.txt', 'properFilename.md'); 
        console.log('File renamed successfully');
    } catch (err) {
        console.error('Error: FS operation failed');
    }
};

await rename();
