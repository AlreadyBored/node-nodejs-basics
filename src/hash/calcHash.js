import crypto from 'crypto'
import fs from 'fs';

export const calculateHash = async () => {
    const hash = crypto.createHash('SHA256');
    fs.readFile('./files/fileToCalculateHashFor.txt', 'utf-8', (err, data) => {
        if (err) throw Error('FS operation failed');
        data = hash.update(data)
        const gen_hash = data.digest('hex');
        console.log("hash : " + gen_hash);
    })
};

calculateHash()