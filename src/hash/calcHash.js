const fs = require('fs');
const path = require('path');

const calculateHash = async () => {
    // Write your code here 
    const filePath = path.join(__dirname, 'fileToCalculateHashFor.txt');

    const hash = crypto.createHash('sha256');

    const stream = fs.createReadStream(filePath);

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(`SHA256 Hash for fileToCalculateHashFor.txt: ${hexHash}`);
    });

    stream.on('error', (error) => {
        console.error(`Error reading the file: ${error.message}`);
    });
};

await calculateHash();