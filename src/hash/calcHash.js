const crypto = require('crypto');
const fs = require('fs');

const calculateHash = async () => {
    const fileStream = fs.createReadStream('fileToCalculateHashFor.txt');
    const hash = crypto.createHash('sha256');

    fileStream.on('data', chunk => {
        hash.update(chunk);
    });

    fileStream.on('end', () => {
        console.log(hash.digest('hex'));
    });

    fileStream.on('error', err => {
        console.error('Error reading file:', err);
    });
};

await calculateHash();
