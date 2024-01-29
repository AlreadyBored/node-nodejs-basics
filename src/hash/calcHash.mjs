import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const pathToRead = './files/fileToCalculateHashFor.txt';
    const fileStream = fs.createReadStream(pathToRead, 'utf-8');
    const hash = crypto.createHash('sha256');
    fileStream.on('data', (data) => {
        hash.update(data);
    })
    fileStream.on('end', () => {
        const hexHash = hash.digest('hex');
        console.log(hexHash);
    })
};

await calculateHash();