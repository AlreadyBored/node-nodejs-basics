const fs = require('fs');
const path = require('path');

const write = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'fileToWrite.txt');

    const writableStream = fs.createWriteStream(filePath);

    process.stdin.pipe(writableStream);

    writableStream.on('finish', () => {
        console.log(`Data has been written to ${filePath}`);
    });

    writableStream.on('error', (error) => {
        console.error(`Error writing to the file: ${error.message}`);
    });
};

await write();