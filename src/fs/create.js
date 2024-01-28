const create = async () => {
    const fs = require('fs').promises; // Importing fs module
    const path = require('path'); // Importing the path module for path work
    const dataToWrite = 'I am fresh and young'; // To write to fresh.txt
    const filePath = path.join(__dirname, 'files', 'fresh.txt'); // Grabs path and points to 'files'

    try {
        await fs.writeFile(filePath, dataToWrite) // Writing data to above described path: filePath
        console.log('File "${filePath}" has been created with success!');
    } catch (error) {
        if(error.code === 'EEXIST') { // 'EEXIST' means if 'fresh.txt' already exists, in this context
            throw new Error('FS operation failed')
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
};

await create();