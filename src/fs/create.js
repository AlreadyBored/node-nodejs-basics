const create = async () => {
    const fs = require('fs').promises;
    const path = require('path');
    const data = 'I am fresh and young';
    const filePath = path.join(__dirname, 'files', 'fresh.txt');

    try {
        await fs.writeFile(filePath, data)
        console.log('File "${filePath}" has been created with success!');
    } catch (error) {
        throw new Error(`FS operation failed: ${error.message}`); // Throw all errors
    }
};

await create();