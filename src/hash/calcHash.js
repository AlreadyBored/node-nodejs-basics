import fs from 'fs';
import crypto from 'crypto';
const calculateHash = async () => {
    const hash = crypto.createHash('sha256')
    const rs = fs.createReadStream('src/hash/files/fileToCalculateHashFor.txt')
    rs.on('data', chunk => hash.update(chunk));
    rs.on('end', () => {
        const digest = hash.digest('hex');
        console.log(digest);
    });
};

await calculateHash();