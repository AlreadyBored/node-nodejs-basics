import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const readStream = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt');

    readStream.on('data', chunk => hash.update(chunk));
    
    readStream.on('end', () => console.log(hash.digest('hex')));
};

await calculateHash();