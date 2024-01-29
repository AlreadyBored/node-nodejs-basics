const fs = require('fs');
const path = require('path');

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'fileToRead.txt');

    try {
        await fs.access(filePath);

        const content = await fs.readFile(filePath, 'utf-8');
        console.log('Content of fileToRead.txt:', content);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();