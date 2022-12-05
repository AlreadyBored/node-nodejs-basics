import crypto from 'crypto';
import fs from 'fs';

const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt';
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        const contents = data.toString();
        const hash = crypto.createHash('sha256').update(contents).digest('hex');
        console.log(hash);
    });
};

await calculateHash();