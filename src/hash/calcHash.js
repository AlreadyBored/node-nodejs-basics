import fs from 'fs';
import crypto from 'crypto';
const file = "src/hash/files/fileToCalculateHashFor.txt"


const calculateHash = async () => {
    const hash = crypto.createHash('sha256');
    const readStream = fs.createReadStream(file);
        readStream.on('error', (err) => {
            console.error('Crypto operation failed ', err);
        })

        readStream.on('data', (chunk) => {
            hash.update(chunk);
        })

        readStream.on('end', () => {
            const hashHex = hash.digest('hex');
            console.log(hashHex);
        })
};

await calculateHash();