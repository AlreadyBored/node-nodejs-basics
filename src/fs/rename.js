const fs = require('fs');
const path = require('path');

const rename = async () => {
    // Write your code here 
    const MainFilePath = path.join(__dirname, 'wrongFilename.txt');
    const destinationFilePath = path.join(__dirname, 'properFilename.md');

    try {
        await fs.access(MainFilePath);

        try {
            await fs.access(destinationFilePath);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.rename(MainFilePath, destinationFilePath);
                console.log('File renamed successfully: wrongFilename.txt -> properFilename.md');
            } else {
                throw error;
            }
        }
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();