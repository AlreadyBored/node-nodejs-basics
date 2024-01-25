import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const filePath = 'src/hash/files/fileToCalculateHashFor.txt';
    const readStream = fs.createReadStream(filePath);
    readStream.on('readable', () => {
       let content = readStream.read();
       if (content) {
           console.log(crypto.createHash('sha256').update(content).digest('hex'));
       }
    });
};

await calculateHash();
