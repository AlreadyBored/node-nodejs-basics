import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {

    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', (err, data) => {
        if (err) throw err;
        console.log(crypto.createHash('sha256').update(data).digest('hex'));
    })
};

await calculateHash();