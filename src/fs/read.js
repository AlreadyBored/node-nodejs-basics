const fs = require('fs').promises;

const read = async () => {
    try {
        const data = await fs.readFile('fileToRead.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await read();
