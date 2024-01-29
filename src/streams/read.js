const fs = require('fs');
const path = require('path');

const read = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'fileToRead.txt');

    const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

    stream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    stream.on('end', () => {
        console.log();
    });

    stream.on('error', (error) => {
        console.error(`Error reading the file: ${error.message}`);
    });
};

await read();