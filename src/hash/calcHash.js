import crypto from 'crypto'
import fs from 'fs';

const calculateHash = async () => {
    const hash = crypto.createHash('SHA256');
    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', 'utf-8', (err, data) => {
        if (err) throw Error('FS operation failed');
        const hex = hash.update(data).digest('hex')
        console.log("hash : " + hex);
    })
};

await calculateHash();